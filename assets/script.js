//formulario
const variedadForm = document.querySelector('#orden-form');
//entradas
const variedad = document.querySelector('#variedad');
const cantidad = document.querySelector('#cantidad');
const picante = document.querySelector('#picante')
//secciones
const lista = document.querySelector('#lista');

variedadForm.addEventListener('submit', function(){
  event.preventDefault();
  console.log('detuvimos el submit');
  const variedadElegida = variedad.value;
  const cantidadPedida = cantidad.value;
  const agregarPicante = picante.value;

  let imagenTorta;
  if (variedadElegida == 'chilanga') {
    imagenTorta = 'torta-chilanga.jpg';
  } else {
    imagenTorta = 'torta-cubana.jpg';
  }

  const comanda = `
      <li class="nueva-comanda">
        <h3>Esta es tu orden:</h3>
        <p>${cantidadPedida} ${variedadElegida} con ${agregarPicante} de picante.</p>
        <img src='assets/img/${imagenTorta}'>
      </li>
      `
  lista.innerHTML += comanda;
});

//`https://wa.me/5215513820832?text=Hola%20quiero%20ordenar%20${comanda}