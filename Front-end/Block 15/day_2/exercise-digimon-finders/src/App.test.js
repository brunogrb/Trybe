import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe('Teste da aplicação toda', () => {
  
  afterEach(() => jest.clearAllMocks());

  it('renders App', () => {
    const { getByText } = render(<App />);

    const linkElement = getByText(/Faça uma pesquisa/i);
    const search = getByText(/Search Digimon/i);

    expect(linkElement).toBeInTheDocument();
    expect(search).toBeInTheDocument();
  });

  it('change value in input', () => {
    const { getByTestId } =render(<App />);

    expect(getByTestId('input')).toBeDefined();
    const input = getByTestId('input');
    expect(input).toHaveValue('');
    fireEvent.change(input, { target: { value: 'Agumon'}});
    expect(input).toHaveValue('Agumon');
  });

  it('search digimon', async () => {
    const digimon = {
      name:'Agumon',
      img:'https://digimon.shadowsmith.com/img/agumon.jpg',
      level: 'Rookie',
    };

    jest.spyOn(global, "fetch");

    const result = global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(digimon),
    });

    const { getByTestId, findByText, getByAltText } = render(<App />);

    const input = getByTestId('input');
    expect(input).toHaveValue('');

    fireEvent.change(input, { target: { value: 'Agumon' } });
    expect(input).toHaveValue('Agumon');

    const buttonSearch = getByTestId('buttonSearch');
    expect(buttonSearch).toBeInTheDocument();
    fireEvent.click(buttonSearch);

    expect(result).toBeCalled();
    expect(result).toBeCalledTimes(1);
    expect(result).toBeCalledWith('https://digimon-api.vercel.app/api/digimon/name/Agumon');

    await findByText('level: Rookie');
    expect(getByTestId('digimonName')).toBeInTheDocument();
    expect(getByAltText('Agumon')).toBeInTheDocument();
  });

});
