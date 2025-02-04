/********************************barra navegación**********************************************/

//carga del   DOM y funcion para crear elementos de navegación
document.addEventListener('DOMContentLoaded', () => {
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
  
});


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

//declaro e inicializo la variable ofertas que se muestra
//  en mi html a traves de document.getElementById//
let ofertas = document.getElementById('ofertas');

//le doy estilo con propiedades de js y le paso el contenido del texto"//
ofertas.textContent = "50";
ofertas.style.color = "#df1515";
ofertas.style.marginTop = "1px";
ofertas.style.fontFamily = "manrope";
ofertas.style.fontWeight = "700";
ofertas.style.fontSize = "10rem";
console.log('ofertas');

/*****************************************carrito*****************************************/


/*    1)**************creo un array de productos*********************************************/
const productos = [
  {
    id: '1',
    nombre: 'lentes de sol',
    precio: 45000,
    descripcion: 'Esto es una descripción',
    colores: ["verde", "azul", "negro"],
    stock: 0,
    imagen: 'assets/03.png'
  },

  {
    id: '2',
    nombre: 'Lentes de sol',
    precio: 70000,
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
    nombre: 'jsjs',
    precio: 45000,
    descripcion: 'lLll',
    colores: ["verde", "azul", "negro"],
    stock: 4,
    imagen: 'assets/08.png'
  },
  {
    id: '5',
    nombre: 'jsjs',
    descripcion: 'lLll',
    colores: ["verde", "azul", "negro"],
    stock: 4,
    imagen: 'assets/10.png'
  },
  {
    id: '6',
    nombre: 'jsjs',
    descripcion: 'lLll',
    colores: ["verde", "azul", "negro"],
    stock: 4,
    imagen: 'assets/09.png'
  },
  {
    id: '7',
    nombre: 'jsjs',
    descripcion: 'lLll',
    colores: ["verde", "azul", "negro"],
    stock: 4,
    imagen: 'assets/04.png'
  },
  {
    id: '8',
    nombre: 'jsjs',
    descripcion: 'lLll',
    colores: ["verde", "azul", "negro"],
    stock: 4,
    imagen: 'assets/21.png'
  },
  {
    id: '9',
    nombre: 'jsjs',
    descripcion: 'lLll',
    colores: ["verde", "azul", "negro"],
    stock: 4,
    imagen: 'assets/06.png'
  },
  {
    id: '10',
    nombre: 'jsjs',
    descripcion: 'lLll',
    colores: ["verde", "azul", "negro"],
    stock: 4,
    imagen: 'assets/07.png'
  },
  {
    id: '11',
    nombre: 'lentes de sol',
    descripcion: 'Esto es una descripción',
    colores: ["verde", "azul", "negro"],
    stock: 4,
    imagen: 'assets/01.png'
  },
  {
    id: '12',
    nombre: 'Lentes',
    descripcion: 'otra descripción',
    colores: ["verde", "rosa", "negro"],
    stock: 14,
    imagen: 'assets/11.png'
  },
  {
    id: '13',
    nombre: 'Lentes',
    descripcion: 'otra descripción',
    colores: ["verde", "rosa", "negro"],
    stock: 14,
    imagen: 'assets/12.png'
  },
  {
    id: '14',
    nombre: 'Lentes',
    descripcion: 'otra descripción',
    colores: ["verde", "rosa", "negro"],
    stock: 14,
    imagen: 'assets/13.png'
  },
  {
    id: '15',
    nombre: 'Lentes',
    descripcion: 'otra descripción',
    colores: ["verde", "rosa", "negro"],
    stock: 14,
    imagen: 'assets/14.png'
  },
]

//2)Creo contenedor de las cards que conecta con el card-container de html
const container = document.getElementById('productos-contenedores');
container.style.display = 'flex';


/*intenta obtener el valor almacenado en carrito y si no hay nada devuelve null; json parse 
lo que hace es convertir en objeto el dato que encuentre guardado en sessionstorage
(los valores almacenados en sessionstorage se serializan siempre en json que es texto)
|| [] esto devuelve un arreglo vació aunque no haya nada almacenado , es una buena práctica */
let carrito = JSON.parse(sessionStorage.getItem('carrito , producto')) || [];

/*la función encuentra los productos x id y los agrega al carrito con push
luego actualiza el carrito de compras guardandolo en el session storage y mostrando por consola
un mensaje*/
function agregarAlCarrito(id) {
  const producto = productos.find(p => p.id === id);

  //buscar si el producto está en el carrito
  if (producto) {
    const productoEnCarrito = carrito.find(p => p.id === id);

    //Si ya está aumenta la cantidad
    if (productoEnCarrito) {
      productoEnCarrito.cantidad++;
    }

    //Si es nuevo lo agrego con cantidad 1
    else {
      producto.cantidad = 1;
      carrito.push(producto);
    }


    actualizarCarrito();
    guardarCarrito(); // Guardar carrito en session Storage
    //sessionStorage.setItem('carrito', 'JSON.stringify(carrito)');
    console.log("El carrito se ha actualizado, carrito");
  }
}

function actualizarCarrito(producto) {
  const carritoModal = document.getElementById('carrito-contador');
  carritoModal.innerHTML = ``; // Vaciar contenedor

  carrito.forEach(producto => {
    const productoElemento = document.createElement('div');
    productoElemento.innerHTML = `
            <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">${producto.descripcion}</p>
            <p class="card-text">${producto.precio}</p>
            <button onclick="eliminarDelCarrito(${producto.id})">Eliminar del carrito</button>
        `;
    carritoModal.appendChild(productoElemento);
  });
}

function eliminarDelCarrito(id) {
  carrito = carrito.filter(p => p.id !== id); // Filtrar el carrito
  actualizarCarrito();
  guardarCarrito(); // Guardar carrito en Local Storage
};
function guardarCarrito() {
  localStorage.setItem('carrito', JSON.stringify(carrito));
};

function cargarCarrito() {
const carritoGuardado = sessionStorage.getItem('carrito');
if (carritoGuardado) {
  carrito = JSON.parse(carritoGuardado);
  actualizarCarrito();
}};

document.addEventListener('DOMContentLoaded', () => {
  cargarCarrito(); 
  console.log('si está bien se tiene que mostrar este mensaje') 
});

//cards********************************
/*para cada producto itero y creo una nueva tarjeta y le paso un producto*/
productos.forEach((producto) => {
  //createElement crea un un nuevo elemento html de manera dinamica
  const card = document.createElement('div');
  //classList.add nos permite añadir clases
  card.classList.add('card', 'col-12', 'col-lg-4', 'p-2');
  const img = document.createElement('img');
  card.classList.add('src');
  card.classList.add('alt');

  //añado el conteindo a la card
  card.innerHTML = `
  <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
  <div class="card-body">
      <h5 class="card-title">${producto.nombre}</h5>
      <p class="card-text">${producto.descripcion}</p>
      <button class="btn btn-primary agregar-al-carrito" data-id=${producto.id}>Agregar al carrito</button> </div>   
`;

  //añado la card al contenedor
  container.appendChild(card);
  card.appendChild(img);

  const botonAgregar = card.querySelector('.agregar-al-carrito');

  botonAgregar.addEventListener('click', () => {
    agregarAlCarrito(producto.id);
  });

})



//modal muestra la compra en el carrito************************************
const modal = document.getElementById('cartModal');
const modalCarritoContainer = document.getElementById('modal-carrito-container');
const abrirCarritoBoton = document.getElementById('abrir-carrito');

abrirCarritoBoton.addEventListener('click', () => {    
  actualizarCarrito = (carrito, modalCarritoContainer);
  modal.style.display = 'block';
});


const closeButton = document.querySelector('.close-modal');
closeButton.addEventListener('click', (closeButton) => {
  modal.style.display = 'none';
});
//let carrito = JSON.parse(localStorage.getItem('carrito')) || []; // Recuperar carrito al cargar la página

const botonesCompra = document.querySelectorAll('.boton-compra');
botonesCompra.forEach(boton => {
  const contenedorBoton = document.createElement('div');
  contenedorBoton.classList.add('contenedor-boton');
  contenedorBoton.appendChild(boton);
});

//map para crear un array de precios totales
const preciosTotales = carrito.map(function (producto) {
  return producto.precio * producto.cantidad
});

console.log("preciosTotales", preciosTotales);


//usar reduce para calcular el precio total de los productos
const precioTotalDelCarrito = carrito.reduce(function (acumulador, producto) {
  return acumulador + producto.precio * producto.cantidad;

}, 0);
//el cero le indica al acumulador dónde debe empezar

console.log(precioTotalDelCarrito);
console.log("precio total del carrito");


document.addEventListener('DOMContentLoaded', () => {
  actualizarCarrito();
});

/*declaro la variable y le asigno un array vacio que devuelve los productos sin stock
entonces si la longitud de los productos sin stock es mayor a cero es porque se encontró
algún articulo sin stock*/

let productosSinStock = [];
console.log(productosSinStock);
function mostrarProductosSinStock(productos) {
  productosSinStock = productos.reduce((acumulador, producto) => {
    if (producto.stock === 0) {
      acumulador.push(producto.nombre);
    }
    return acumulador;
  },
    []);
}

if (productosSinStock.length > 0) {
  console.log("Producto sin stock: ");
  productosSinStock.forEach(producto => console.log(`-${producto}`));
} else {
  console.log("No hay productos sin stock");
}

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

//uso el reduce para algo 

//calculo el total de la compra


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
const cards = document.querySelectorAll("card");
cards.forEach(card => {
  card.addEventListener('mouseover', () => {
    card.classList.add('hover');
  });
  card.addEventListener('mouseout', () => {
    card.classList.remove('hover');
  });
});

/*eventos de mouse**************************************************
click
dbl click
mouseover
mouseout
mousemove

eventos de teclado
keydown se presiona una tecla
keyup se suelta una tecla
keypress se presiona una tecla(no se usa más)
*/

//const unBoton = document.getElementById('');

//addEventListener//





/*************************************eventos del mouse*********************ver como lo soluciono***********************

botonShop.addEventListener('mouseover', () => {
    botonShop.style.transform = 'scale 1.2' 
  });
  botonShop.addEventListener('mouseout', () => {
    botonShop.classList.add('zoom');
  });*/



/*formulario ***************************************
 
submit se envía el formulario
change cambio de valor de un campo(input)
input

eventos de ventana.
load
resize
scroll
 
 
*/
//display flex para los items

/*generar token
function generarToken(){
  let caracteres = "ABCDEFG12345678"
  let token = "";
  for( let i = 0; i< 5; i++){
      token += caracteres.charAt(Math.floor(Math.random()*caracteres.length));
  }
  document.getElementById("token").textContent = token;
}
setInterval(generarToken, 10000);
generarToken()*/



/**************************añadir productos al carrito de compras******************** */
/*productos seleccionados para el carrito*/

let productosSeleccionados = [];
let productosAñadidos = [];
let producto = [];

productosSeleccionados.forEach(productoSeleccionado => {

  alert("tu producto ha sido añadido al carrito!")
})

/*
Si el producto seleccionado se confirma = añadir carrito si no eliminar producto seleccionado
productosAñadidos = productosSeleccionados */
//https://jsonplaceholder.typicode.com/

