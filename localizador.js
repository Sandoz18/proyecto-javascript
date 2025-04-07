//modal lateral
const modalLateral = document.querySelector('.modal-lateral');
const modalLateralAbrir = document.getElementById('abrir-modal-lateral');
const modalLateralCerrar = document.querySelector('.modal-lateral-cerrar');
const solapa = document.querySelector('.modal-lateral-solapa'); // Solapa
const cerrarSolapa = document.getElementById('cerrar-solapa'); // Botón de cierre

modalLateralAbrir.addEventListener('click', () => {
  modalLateral.classList.add('abierto');
  solapa.style.display = 'none';
});

modalLateralCerrar.addEventListener('click', () => {
  modalLateral.classList.remove('abierto');
  solapa.style.display = 'flex';
});

cerrarSolapa.addEventListener('click', () => {
  solapa.style.display = 'none'; // Oculta la solapa
});

