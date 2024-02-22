const apiUrl = 'https://mindicador.cl/api/';
let tagValor = document.getElementById('valor-id');
let tagSelect = document.getElementById('select-id');
let tagResult = document.getElementById('p-id');

let result = {};
let resultLastDay = {}

async function getData(api) {
  try {
    const res = await fetch(api);
    const data = await res.json();
    result = data;
  } catch (e) {
    console.log(e.message);
    tagResult.innerHTML = "Lo siento, ha habido un problema &#128517;";
  }
}
getData(apiUrl);

const calcular = () => {
  const valor = parseInt(tagValor.value);
  const opcionSeleccionada = parseInt(tagSelect.value);
  let resultado = 0;

  if (opcionSeleccionada === 1) {
    resultado = valor * result.dolar.valor;
    renderGrafica()
  } else if (opcionSeleccionada === 2) {
    resultado = valor * result.euro.valor;
  } else if (opcionSeleccionada === 3) {
    resultado = valor * result.bitcoin.valor;
  } else if (opcionSeleccionada === 0) {
    resultado = 'Elija una opción válida';
  }

  tagResult.innerHTML = resultado;
};

