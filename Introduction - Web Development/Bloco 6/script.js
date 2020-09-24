let data = document.getElementById('data-inicio');
data.addEventListener('change', verificaData);


function verificaData() {
  let verfica = document.getElementById('data-inicio').value;
  let dia = verfica[0]+verfica[1];
  console.log(dia);
}