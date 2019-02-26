//formulario
const ordenForm = document.querySelector('#orden-form');
//entradas
const sabor = ordenForm.torta;
const cantidad = document.querySelector('#cantidad');
const picante = document.querySelector('#picante')
//secciones
const lista = document.querySelector('#lista');
//cards
const tortaCards = document.getElementsByClassName('torta-card');

ordenForm.addEventListener('submit', function(){
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

//let msj = confirm("Al dar click en Aceptar, nos enviarás un WhatsApp con tu pedido. Si quiere revisar algo, haz click en Cancelar.");
//alert (msj);
//if (msj == true) {
//   function () {
//     var send = window.open("https://wa.me/5215513820832?text=Hola%20quiero%20ordenar%20${comanda}", "_blank")
//     win.focus();
//     //agregar un listener para que al mandar mensaje, se cierre la pestaña actual (se puede con el tab de WA???)

//   }
// }