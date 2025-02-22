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

let paginas = ['Campaña', 'Productos', 'Contacto'];
paginas.forEach((pagina) => {
  const li = document.createElement('li');
  li.textContent = pagina;
  li.style.position = 'relative';
  li.style.color = '#000000';
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
  underline.style.background = '#000000';
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

/********************************banner***************************************************/

let banner = document.getElementsByClassName('banner');

//declaro e inicializo la variable ofertas que se muestra
//  en mi html a traves de document.getElementById//
let ofertas = document.getElementById('ofertas');
//le doy estilo con propiedades de js y le paso el contenido del texto"//
ofertas.style.color = "#df1515";
ofertas.style.fontFamily = "manrope";
ofertas.style.fontWeight = "700";
console.log('ofertas');

/*****************************************carrito*****************************************/

let productos = []; //declaro productos como variable global y vacia para que pase el json
//creo la función asincronica que carga los productos con una promesa

  /*función generar nombres random de producto*/ 
  function generarNombreLentes() {
    const nombres = [
        "Solstice", "Zenith", "Nimbus", "Lumina", "Veridian",
        "Aether", "Solara", "Apex", "Nova", "Ember",
        "Cinder", "Vesper", "Azure", "Crimson", "Onyx",
        "Lotus", "Aurora", "Eclipse", "Mirage", "Prism"
    ];

    return nombres[Math.floor(Math.random() * nombres.length)];
}

// Conjunto para almacenar los nombres usados
const nombresUsados = new Set();

function generarNombreLentesUnico() {
    let nombreAleatorio;
    do {
        nombreAleatorio = generarNombreLentes(); // Generar un nombre aleatorio
    } while (nombresUsados.has(nombreAleatorio)); // Verificar si ya se usó

    nombresUsados.add(nombreAleatorio); // Agregar el nombre al conjunto
    return nombreAleatorio;
}


    /*funcion para descripción aleatoria para generar texto*/ 
    function generarDescripcionAleatoria() {
      const materialesMontura = ["Acetato", "Metal", "Policarbonato", "Titanio"];
      const tiposCristales = ["Polarizados", "UV400", "Espejados", "Fotocromáticos"];
      const caracteristicasMontura = ["Montura completa", "Media montura", "Estilo aviador", "Estilo wayfarer"];
      const caracteristicasAdicionales = ["Bisagras de alta resistencia", "Almohadillas nasales ajustables", "Patillas ergonómicas", "Protección lateral"];
  
      const materialMontura = materialesMontura[Math.floor(Math.random() * materialesMontura.length)];
      const tipoCristal = tiposCristales[Math.floor(Math.random() * tiposCristales.length)];
      const caracteristicaMontura = caracteristicasMontura[Math.floor(Math.random() * caracteristicasMontura.length)];
      const caracteristicaAdicional = caracteristicasAdicionales[Math.floor(Math.random() * caracteristicasAdicionales.length)];
  
      // Genera la descripción combinando las características
      let descripcion = `${caracteristicaMontura} de ${materialMontura}. Cristales ${tipoCristal}. ${caracteristicaAdicional}.`;
  
      // Limita la longitud de la descripción a 80 caracteres
      return descripcion.substring(0, 80);
  }
async function cargarProductosDesdeJson() {
  fetch('productos.json')
  .then(response => response.json())
  .then(data => {
    mostrarProductos(data);
    productos = data; // Guarda los productos en la variable global
  });



function mostrarProductos(productos) {
  const container = document.getElementById("productos-contenedores");
  container.innerHTML = ""; // Limpia el contenedor
  const row = document.createElement('div'); // Crea la fila
  row.classList.add('row');
  container.appendChild(row);


  /*xa cada producto de productos creo las columas dentro de las filas para el grid*/
  productos.forEach((producto) => {
    producto.nombre = generarNombreLentes();
    producto.nombre = generarNombreLentesUnico();
    producto.descripcion = generarDescripcionAleatoria();
    const col = document.createElement('div');
    const container = document.createElement('div');
    col.classList.add('col-12', 'col-lg-4', 'p-1', 'mt-5')

    const card = document.createElement("div");
    card.classList.add('card');      
    let opcionesColor = '';
    producto.colores.forEach(color => {
      opcionesColor += `<option value="${color}">${color}</option>`;
    });
    card.innerHTML = `
      <div>
      <div class="position-absolute top-0 start-0 bg-danger text-white p-1 rounded-end">Oferta</div>
        <img src="${producto.imagen}" class="w-100" alt="${producto.nombre}">
        <p class="card-name fw-bold mt-3 mb-1">${producto.nombre}</p>
        <p class="card-price fw-semibold"> $${producto.precio}</p>
         <p class="card-description">${producto.descripcion}</p>
       
       
        <button class="btn btn-primary agregar-carrito" data-id="${producto.id}">Agregar al carrito</button>
      </div>
    `;
    col.appendChild(card);
    row.appendChild(col);
  });
  function agregarEventosCarrito() {
    const botonesAgregar = document.querySelectorAll(".agregar-carrito");
    botonesAgregar.forEach((boton) => {
      boton.addEventListener("click", (evento) => {
        const id = evento.target.dataset.id;
        agregarProductoAlCarrito(id); // Llama a la función correcta
      });
    });
  
  }
  agregarEventosCarrito();
}


}

//2)Creo contenedor de las cards que conecta con el card-container de html
const container = document.getElementById('productos-contenedores');
container.style.display = 'flex';
container.style.justifyContent = 'center';

/*intenta obtener el valor almacenado en carrito y si no hay nada devuelve null; json parse 
lo que hace es convertir en objeto el dato que encuentre guardado en sessionstorage
(los valores almacenados en sessionstorage se serializan siempre en json que es texto)
|| [] esto devuelve un arreglo vació aunque no haya nada almacenado , es una buena práctica */
let carrito = JSON.parse(sessionStorage.getItem('carrito')) || [];

let contadorCarrito = document.getElementById('carrito-contador');
/*la función encuentra los productos x id y los agrega al carrito con push
luego actualiza el carrito de compras guardandolo en el session storage y mostrando por consola
un mensaje*/
function agregarProductoAlCarrito(id) {
  //acá agrego
  const productoAgregado = productos.find(p => p.id === id);
  if (!productoAgregado) 
    return console.log("producto no encontrado");  // Si no existe el producto, no hace nada

  // Buscar si el producto ya está en el carrito
  const productoEnCarrito = carrito.find(p => p.id === id);

  if (productoEnCarrito) {
    productoEnCarrito.cantidad++;
    console.log("Aumenta cantidad de productos");
  } else {
    // Crear una copia del producto en el carrito sin modificar el original
    const nuevoProducto = { ...productoAgregado, cantidad: 1 };
    carrito.push(nuevoProducto);
    console.log("Nuevo producto agregado al carrito");
  }

  actualizarCarrito();
  guardarCarrito();
  //toastify
Toastify({
  text: "Producto agregado al carrito!",
  duration: 3000,
  destination: "https://github.com/apvarun/toastify-js",
  newWindow: true,
  close: true,
  gravity: "top", // `top` or `bottom`
  position: "right", // `left`, `center` or `right`
  stopOnFocus: true, // Prevents dismissing of toast on hover
  style: {
    background: "linear-gradient(to right,rgb(176, 164, 0)",
  },
  onClick: function(){} // Callback after click
}).showToast();
}


/*La función actualizarCarrito */ 
function actualizarCarrito(id) {
  const carritoModal = document.getElementById('modal-carrito-container');
  carritoModal.innerHTML = ''; // Limpiar el contenedor

  let subtotal = 0;
 

  carrito.forEach(producto => {
    const productoElemento = document.createElement('div');
    productoElemento.classList.add('card', 'mb-3' ); // Agregar clases de Bootstrap

    productoElemento.innerHTML = `
    <div class="row g-0 d-flex align-items-center">
        <div class="col-md-8">
            <div class="card-header">${producto.nombre}</div>
            <div class="card-body d-flex flex-column justify-content-center">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text"> $${producto.precio}</p>
                <div class="d-flex align-items-center justify">
                    <button class="btn btn-sm btn-danger me-2" onclick="eliminarDelCarrito('${producto.id}')"><i class="fas fa-trash-alt"></i></button>
                    <button class="btn btn-sm btn-primary me-2" onclick="disminuirCantidad('${producto.id}')">-</button>
                    <p class="card-text">Cantidad: ${producto.cantidad}</p>
                    <button class="btn btn-sm btn-primary ms-2" onclick="aumentarCantidad('${producto.id}')">+</button>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <img src="${producto.imagen}" class="img-fluid rounded-start" alt="${producto.nombre}" style="height: 100%; object-fit: cover;">
        </div>
    </div>
`;

    subtotal += producto.precio * producto.cantidad;
    carritoModal.appendChild(productoElemento);
  });

  const descuentoPorcentaje = 10;
    const descuento = (subtotal * descuentoPorcentaje) / 100;

    const total = subtotal - descuento;

 
  const subtotalElemento = document.getElementById('subtotal-carrito');
  subtotalElemento.textContent = `Subtotal: $${subtotal}`;

  const descuentoElemento = document.getElementById('descuento-carrito');
  descuentoElemento.textContent = `Descuento: $${descuento}`;

  const totalElemento = document.getElementById('total-carrito');
  totalElemento.textContent = `Total: $${total}`;
  const contadorCirculo = document.querySelector('.contador-circulo');
const cantidadProductos = carrito.reduce((total, producto) => total + producto.cantidad, 0);

contadorCarrito.textContent = cantidadProductos;
if (cantidadProductos === 0) {
  contadorCarrito.style.display = 'none'; // Ocultar el contador
} else {
  contadorCarrito.style.display = 'inline-block'; // Mostrar el contador
  contadorCarrito.textContent = cantidadProductos;
}
if (cantidadProductos > 0) {
    contadorCirculo.style.display = 'block';
    contadorCirculo.textContent = cantidadProductos;
} else {
    contadorCirculo.style.display = 'none';
}
}



function eliminarDelCarrito(id) {
  carrito = carrito.filter(p => p.id !== id); // Filtrar el carrito
  actualizarCarrito();
  guardarCarrito(); // Guardar carrito en Local Storage
};

function aumentarCantidad(id) {
  const producto = carrito.find(p => p.id === id);
  producto.cantidad++;
  actualizarCarrito();
  guardarCarrito();
}

function disminuirCantidad(id) {
  const producto = carrito.find(p => p.id === id);
  if (producto.cantidad > 1) {
    producto.cantidad--;
    actualizarCarrito();
    guardarCarrito();
  }
}

function mostrarDescuentos() {
  const descuentosElemento = document.getElementById('descuentos');
  
  descuentosElemento.textContent = "Descuentos: $0"; // Ejemplo
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('finalizar-compra').addEventListener('click', () => {
      if (carrito.length === 0) {
          Swal.fire({
              icon: 'warning',
              title: '¡Carrito vacío!',
              text: 'No hay productos en tu carrito. Agrega algunos antes de finalizar la compra.'
          });
      } else {
          // Si el carrito no está vacío, puedes redirigir al usuario a la página de pago
          console.log('Finalizar compra');

          const paginaPago = document.getElementById('finalizar-compra').getAttribute('href');

           window.location.href = 'mi-carrito.html'; 
      }
  });
});



function guardarCarrito() {
  sessionStorage.setItem('carrito', JSON.stringify(carrito));
};

function cargarCarrito() {
const carritoGuardado = sessionStorage.getItem('carrito');
if (carritoGuardado) {
  carrito = JSON.parse(carritoGuardado);
  actualizarCarrito();
}};

document.addEventListener('DOMContentLoaded', () => {
  cargarCarrito(); 
  console.log('El carro se carga mostrame un mensaje') 
});

//cards********************************
/*para cada producto itero y creo una nueva tarjeta y le paso un producto*/
productos.forEach((producto) => {
  console.log('Procesando producto:', producto);
  //createElement crea un un nuevo elemento html de manera dinamica
  const card = document.createElement('div');
  //classList.add nos permite añadir clases
  card.classList.add('card', 'col-12', 'col-lg-4', 'p-1', 'mt-5',); 
 
  

  //añado el contenido a la card
  card.innerHTML = `
  <div class="card-container container-fluid">
   <div class="card-header">${producto.nombre}</div><div class="card-body">
  <img src="${producto.imagen}" class="card-img-top img-fluid" alt="${producto.nombre}">
  <div class="card-body">
      <h5 class="card-title">${producto.nombre}</h5>
      <p class="card-text">${producto.descripcion}</p>
      <button class="btn btn-primary agregar-al-carrito" data-id=${producto.id}>Agregar al carrito</button> </div></div>   
`;

  //añado la card al contenedor
  container.appendChild(card);
 

  const botonAgregar = card.querySelector('.agregar-al-carrito');
  botonAgregar.addEventListener('click', () => {
    agregarProductoAlCarrito(producto.id);
  });
  console.log('Ruta de la imagen', producto.imagen);
})



document.addEventListener('DOMContentLoaded', () => {
  // Cargar el carrito guardado
  cargarCarrito();
  actualizarCarrito();
  console.log('Si está bien, se tiene que mostrar este mensaje');

  // Obtener referencias a los elementos
  const modalElement = document.getElementById('cartModal');
  $('#cartModal').on('hidden.bs.modal', function() {
    $('.modal-backdrop').remove();
  });
  const modalCarritoContainer = document.getElementById('modal-carrito-container');
  const abrirCarritoBoton = document.getElementById('abrir-carrito');


  // Verificar que el modal y el botón existan en el DOM
  if (!modalElement) {
    console.error('No se encontró el elemento "cartModal" en el DOM.');
    return;
  }
  if (!abrirCarritoBoton) {
    console.error('No se encontró el botón "abrir-carrito" en el DOM.');
    return;
  }

  // Agregar el evento click al botón para abrir el modal
  abrirCarritoBoton.addEventListener('click', () => {
    // Actualizar el contenido del carrito
    actualizarCarrito();

    // Crear una instancia del modal de Bootstrap y mostrarlo
    const modalInstance = new bootstrap.Modal(modalElement);
    modalInstance.show();
  });
});

//ver como soluciono el modal 



//map para crear un array de precios totales
const preciosTotales = carrito.map(function (producto) {
  return producto.precio * producto.cantidad
  console.log("preciosTotales", precioTotalDelCarrito);
});

function crearModalLogin() {
  const modalLogin = document.createElement('div');
  modalLogin.classList.add('modal', 'fade');
  modalLogin.id = 'modalLogin';
  modalLogin.tabIndex = -1;
  modalLogin.setAttribute('aria-labelledby', 'loginModalLabel');
  modalLogin.setAttribute('aria-hidden', 'true');

  modalLogin.innerHTML = `
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-center w-100" id="loginModalLabel">Iniciar Sesión</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body text-center">
          <form id="loginForm">
            <div class="mb-3">
              <label for="username" class="form-label">Usuario</label>
              <input type="text" class="form-control" id="username" placeholder="Ingresa tu usuario">
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Contraseña</label>
              <input type="password" class="form-control" id="password" placeholder="Ingresa tu contraseña">
            </div>
            <button type="submit" class="btn btn-primary">Iniciar Sesión</button>
          </form>
          <div class="mt-3">
            <p>O inicia sesión con:</p>
            <div class="d-flex justify-content-center">
                <button class="btn btn-outline-primary btn-sm mx-2">
                    <img src="assets/google-icon.png" alt="Google" style="width: 30px; height: 30px;">
                </button>
                <button class="btn btn-outline-primary btn-sm mx-2">
                    <img src="assets/facebook-icon.png" alt="Facebook" style="width: 30px; height: 30px;">
                </button>
            </div>
          </div>
        </div>
        <div class="modal-footer justify-content-center">
          <p>¿No tienes una cuenta? <a href="registro.html">Regístrate</a></p>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(modalLogin);
  const modalInstance = new bootstrap.Modal(modalLogin);

  const loginForm = modalLogin.querySelector('#loginForm');
  loginForm.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const username = loginForm.querySelector('#username').value;
    const password = loginForm.querySelector('#password').value;
    console.log('Usuario:', username, 'Contraseña:', password);
    modalInstance.hide();
  });

  return modalInstance;
}

const loginLink = document.getElementById('login');

loginLink.addEventListener('click', (evento) => {
  evento.preventDefault();
  const miModalLogin = crearModalLogin();
  miModalLogin.show();
});


/*primero creo la variable cards y le paso el método querySelectorAll
 que va a levantar todos los elementos de html que coincidan con el nombre de la variable*/
const cards = document.querySelectorAll(".card");
cards.forEach(card => {
  card.addEventListener('mouseover', () => {
    card.classList.add('hover');
  });
  card.addEventListener('mouseout', () => {
    card.classList.remove('hover');
  });
});
const modalLateral = document.querySelector('.modal-lateral');
const modalLateralAbrir = document.getElementById('abrir-modal-lateral');
const modalLateralCerrar = document.querySelector('.modal-lateral-cerrar');
const solapa = document.querySelector('.modal-lateral-solapa'); // Solapa
const cerrarSolapa = document.getElementById('cerrar-solapa'); // Botón de cierre

modalLateralAbrir.addEventListener('click', () => {
    modalLateral.classList.add('abierto');
});

modalLateralCerrar.addEventListener('click', () => {
    modalLateral.classList.remove('abierto');
});

cerrarSolapa.addEventListener('click', () => {
    solapa.style.display = 'none'; // Oculta la solapa
});


/***************whatsapp*********************/ 
window.addEventListener('load', () => {
  const whatsappButton = document.querySelector('.whatsapp-button');
  whatsappButton.style.transform = 'scale(0)';
  setTimeout(() => {
      whatsappButton.style.transition = 'transform 0.5s ease-in-out';
      whatsappButton.style.transform = 'scale(1)';

      // Agregar el efecto de pulso después de que el botón aparezca
      setInterval(() => {
          whatsappButton.style.transition = 'transform 0.5s ease-in-out';
          whatsappButton.style.transform = 'scale(1.1)'; // Escala un poco más grande
          setTimeout(() => {
              whatsappButton.style.transform = 'scale(1)'; // Vuelve al tamaño original
          }, 500); // Duración de la animación del pulso
      }, 2000); // Intervalo entre pulsos (2 segundos)
  }, 500);
});
 //que pasa con el total y con el botón para agregar más cantidad?finalizar compra

