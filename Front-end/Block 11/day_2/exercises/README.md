# React Components

You will implement a Pokedex in a simplified way !!
You can use your imagination to style your application. However, it is mandatory that you implement at least these two components:

1. Pokemon: as its name says, this component represents a Pokemon. This component receives as input an object that contains information regarding a specific Pokemon. This component needs to return the following mandatory information to be shown to anyone using the application, this information must be validated using PropTypes:
  * Pokemon name
  * Pokemon type
  * Average weight of the Pokemon, accompanied by the unit of measurement used;
  * Pokemon image

2. Pokedex: this component represents the encyclopedia of Pokemon. This component receives as input a list of Pokemons to be shown on the screen. For each of these received Pokemons, Pokedex calls the Pokemon component.