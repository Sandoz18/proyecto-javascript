/********************************barra navegación**********************************************/

//carga del   DOM y funcion para crear elementos de navegación, la función debe ir x fuera 
document.addEventListener('DOMContentLoaded', () => {
    crearNavegacion();
    cargarProductosDesdeJson();
  
  });
  function crearNavegacion() {
    const menuItems = [
  
    ];
  
    //variable para seleccionar la ul de html
    const navList = document.getElementById('nav-menu');
    console.log(navList);
  
  
    //recorro el array menuItems y creo los li y a
    menuItems.forEach(item => {
      const li = document.createElement('li');
      //agrega am la clase li el elemento nav-item
      li.classList.add('nav-item');
  
  
      const a = document.createElement('a');
      //agrega a la clase a el elemento nav-link                
      a.classList.add('nav-link');
      a.textContent = item.texto;
      a.href = item.enlace;
      //appendChild agrega al elemento a como hijo del elemento li
      li.appendChild(a);
      navList.appendChild(li);
  
    });
  }
  
  /**crear un efecto subrayado dinamico para los li de las pages***/
  //primero creo las paginas con una variable.
  
  let paginas = ['Home', 'Productos', 'Contacto'];
  paginas.forEach((pagina) => {
    const li = document.createElement('li');
    li.textContent = pagina;
    li.style.position = 'relative';
    li.style.color = '#ffff';
    li.style.opacity = '0.7';
    li.style.fontSize = '1.4rem';
    li.style.margin = '0 35px';
  
  
    const underline = document.createElement('div');
    underline.style.position = 'absolute';
    underline.style.bottom = '0';
    underline.style.left = '50%';
    underline.style.transform = 'translateX(-50%)';
    underline.style.width = '0';
    underline.style.height = '1.4px';
    underline.style.background = '#ffff';
    underline.style.opacity = '0.5';
    underline.style.transition = 'transform 0.5s ease-in-out';
  
    li.appendChild(underline); li.addEventListener('mouseover', () => {
      underline.style.width = '100%';
    });
    li.addEventListener('mouseout', () => {
      underline.style.width = '0';
    });
    document.getElementById('nav-menu').appendChild(li);
  
  });
  
  
  //evento para que al scrollear la barra de navegación tenga un fondo //
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
  
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
  
  