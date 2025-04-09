//evento para que al scrollear la barra de navegación tenga un fondo //
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});


//modal lateral
//creo variable que contiene el modal lateral, le paso funciones abrir y cerrar modal y solapa
const modalLateral = document.querySelector('.modal-lateral');
const modalLateralAbrir = document.getElementById('abrir-modal-lateral');
const modalLateralCerrar = document.querySelector('.modal-lateral-cerrar');
const solapa = document.querySelector('.modal-lateral-solapa'); // Solapa
const cerrarSolapa = document.getElementById('cerrar-solapa'); // Botón de cierre

//creo evento click que hace que al abrir el modal se oculte la solapa

modalLateralAbrir.addEventListener('click', () => {
  modalLateral.classList.add('abierto');
  solapa.style.display = 'none';
});

//evento click que hace que al cerrar el modal se muestre de nuevo la solapa

modalLateralCerrar.addEventListener('click', () => {
  modalLateral.classList.remove('abierto');
  solapa.style.display = 'flex';
});

//evento de cierre de solapa

cerrarSolapa.addEventListener('click', () => {
  solapa.style.display = 'none'; // Oculta la solapa
});

// --- Funcionalidad del Buscador ----
const searchInput = document.getElementById('location-search');
const listItems = listaTiendas.querySelectorAll('li'); // Seleccionamos los li generados

searchInput.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase();

    listItems.forEach(item => {
        const locationNameElement = item.querySelector('b');
        const locationName = locationNameElement ? locationNameElement.textContent.toLowerCase() : '';
        const locationDetails = item.textContent.toLowerCase();

        if (locationName.includes(searchTerm) || locationDetails.includes(searchTerm)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});