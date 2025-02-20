/********************************barra navegación**********************************************/

//carga del   DOM y funcion para crear elementos de navegación, la función debe ir x fuera del domloaded
document.addEventListener('DOMContentLoaded', () => {
  crearNavegacion();
  cargarProductosDesdeJson();
  
});
function crearNavegacion() {
  const menuItems = [
    { texto: 'Index', enlace: 'index.html', },

    { texto: 'Productos', enlace: 'productos.html', },

    { texto: 'Login', enlace: 'login.html', },

    { texto: 'Contacto', enlace: 'contacto.html', },
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

let paginas = ['Nosotros', 'Productos', 'Contacto'];
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
 //meterle algun efecto con javascript 


//declaro e inicializo la variable ofertas que se muestra
//  en mi html a traves de document.getElementById//
let ofertas = document.getElementById('ofertas');
//le doy estilo con propiedades de js y le paso el contenido del texto"//
ofertas.style.color = "#df1515";
ofertas.style.fontFamily = "manrope";
ofertas.style.fontWeight = "700";
console.log('ofertas');



/*****************************************carrito*****************************************/


/*    1)**************creo un array de productos********************************************
//creo el array de objeto producto
const productos = [
  {
    id: '1',
    nombre: 'lentes de sol',
    precio: 45,
    descripcion: 'Esto es una descripción',
    colores: ["verde", "azul", "negro"],
    stock: 0,
    imagen: 'assets/03.png'
  },

  {
    id: '2',
    nombre: 'Lentes de sol',
    precio: 700,
    descripcion: 'otra descripción',
    colores: ["verde", "rosa", "negro"],
    stock: 14,
    imagen: 'assets/02.png'
  },

  {
    id: '3',
    nombre: 'lentes acetato',
    precio: 80000,
    descripcion: 'lesto es una descripción',
    colores: ["verde", "azul", "negro"],
    stock: 4,
    imagen: 'assets/05.png'
  },
  {
    id: '4',
    nombre: 'Lentes de Sol',
    precio: 4000,
    descripcion: 'lLll',
    colores: ["verde", "azul", "negro"],
    stock: 4,
    imagen: 'assets/08.png'
  },
  {
    id: '5',
    nombre: 'otros lentes más',
    precio: 40000,
    descripcion: 'basta',
    colores: ["verde", "azul", "negro"],
    stock: 4,
    imagen: 'assets/10.png'
  },
  {
    id: '6',
    nombre: 'jsjs',
    precio: 90,
    descripcion: 'lLll',
    colores: ["verde", "azul", "negro"],
    stock: 4,
    imagen: 'assets/09.png'
  },
  {
    id: '7',
    nombre: 'jsjs',
    precio: 100000,
    descripcion: 'lLll',
    colores: ["verde", "azul", "negro"],
    stock: 4,
    imagen: 'assets/04.png'
  },
  {
    id: '8',
    nombre: 'jsjs',
    precio: 50000,
    descripcion: 'lLll',
    colores: ["verde", "azul", "negro"],
    stock: 4,
    imagen: 'assets/21.png'
  },
  {
    id: '9',
    nombre: 'jsjs',
    precio: 80000,
    descripcion: 'lLll',
    colores: ["verde", "azul", "negro"],
    stock: 4,
    imagen: 'assets/06.png'
  },
  {
    id: '10',
    nombre: 'jsjs',
    precio: 89000,
    descripcion: 'lLll',
    colores: ["verde", "azul", "negro"],
    stock: 4,
    imagen: 'assets/07.png'
  },
  {
    id: '11',
    nombre: 'lentes de sol',
    precio: 300000,
    descripcion: 'Esto es una descripción',
    colores: ["verde", "azul", "negro"],
    stock: 4,
    imagen: 'assets/01.png'
  },
  {
    id: '12',
    nombre: 'Lentes',
    precio: 280000,
    descripcion: 'otra descripción',
    colores: ["verde", "rosa", "negro"],
    stock: 14,
    imagen: 'assets/11.png'
  },
  {
    id: '13',
    nombre: 'Lentes',
    precio: 780000,
    descripcion: 'otra descripción',
    colores: ["verde", "rosa", "negro"],
    stock: 14,
    imagen: 'assets/12.png'
  },
  {
    id: '14',
    nombre: 'Lentes',
    precio: 60000,
    descripcion: 'otra descripción',
    colores: ["verde", "rosa", "negro"],
    stock: 14,
    imagen: 'assets/13.png'
  },
  {
    id: '15',
    nombre: 'Lentes',
    precio: 500000,
    descripcion: 'otra descripción',
    colores: ["verde", "rosa", "negro"],
    stock: 14,
    imagen: 'assets/14.png'
  },
]*/

let productos = []; //declaro productos como variable global

async function cargarProductosDesdeJson() {
  try{
    const respuesta = await fetch('productos.json');//=>  Carga desde json
    if(!respuesta.ok){
      throw new Error( `Error HTTP: ${respuesta.status}`);
      console.log(respuesta);
    }
    productos = await respuesta.json();
    console.log("productos cargados desde json", productos);
   
  }catch(error){
    console.error('error al cargar los productos desde json')
    inicializarPagina(); // Llama a inicializarPagina después de cargar los productos
  };
 
}



//2)Creo contenedor de las cards que conecta con el card-container de html
const container = document.getElementById('productos-contenedores');
container.style.display = 'flex';



/*intenta obtener el valor almacenado en carrito y si no hay nada devuelve null; json parse 
lo que hace es convertir en objeto el dato que encuentre guardado en sessionstorage
(los valores almacenados en sessionstorage se serializan siempre en json que es texto)
|| [] esto devuelve un arreglo vació aunque no haya nada almacenado , es una buena práctica */
let carrito = JSON.parse(sessionStorage.getItem('carrito')) || [];

let contadorCarrito = document.getElementById('carrito-contador');
/*la función encuentra los productos x id y los agrega al carrito con push
luego actualiza el carrito de compras guardandolo en el session storage y mostrando por consola
un mensaje*/
function agregarAlCarrito(id) {
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
   <div class="row g-0">
  <div class="col-md-8">
    <div class="card-header">${producto.nombre}</div><div class="card-body">
      <h5 class="card-title">${producto.nombre}</h5>
      <p class="card-text">Precio: $${producto.precio}</p>
      <div class="d-flex align-items-center">
        <button class="btn btn-sm btn-danger me-2" onclick="eliminarDelCarrito('${producto.id}')"><i class="fas fa-trash-alt"></i></button>
        <button class="btn btn-sm btn-primary me-2" onclick="disminuirCantidad('${producto.id}')">-</button>
        <p class="card-text">Cantidad: ${producto.cantidad}</p>
        <button class="btn btn-sm btn-primary ms-2" onclick="aumentarCantidad('${producto.id}')">+</button>
      </div>
    </div>
  </div>
  <div class="col-md-4">
    <img src="${producto.imagen}" class="img-fluid rounded-start" alt="${producto.nombre}">
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
    agregarAlCarrito(producto.id);
  });
  console.log('deberia cargarse una imagen');
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


/*declaro la variable y le asigno un array vacio que devuelve los productos sin stock
entonces si la longitud de los productos sin stock es mayor a cero es porque se encontró
algún articulo sin stock*/


//esto tiene sentido??
let productosSinStock = [];


//async 
async function mostrarProductosSinStock(productos) {
  const productosSinStock = productos.reduce((acumulador, producto) => {
    if (producto.stock === 0) {
      acumulador.push(producto.id);
    }
    return acumulador;
  }, []);

  if (productosSinStock.length > 0) {
    console.log("Productos sin stock: ");
    productosSinStock.forEach(producto => console.log(`${producto}`));
  } else {
    console.log("No hay productos sin stock");
  }
}

// Llamar a la función asíncrona
mostrarProductosSinStock(productos);
//ordeno productos por más nuevos, precios, mas vendidos, destacados

//redireccionar a la página de pagos

//calcular envíos


/*hover y eventos de mouse*****************************************/
const nuevoEvento = document.getElementById('nuevo-evento');
nuevoEvento.addEventListener('click', () => {
  alert('Esto es un nuevo evento!')
});
nuevoEvento.addEventListener('mousemove', () => {
  console.log('se aplica un zoom en el botón cuando muevo el mouse!');
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


 //que pasa con el total y con el botón para agregar más cantidad?finalizar compra

//optimizar imagenes, ver responsive y seguir arreglando el carrito de compras,login y formulario