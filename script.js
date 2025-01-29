/********************************barra navegación*******************************************


//display flex para los items
navList.style.display = 'flex';
navList.style.justifyContent = 'space-between';
const navbar = document.getElementById('navbar');***/

//carga del   DOM y funcion para crear elementos de navegación
document.addEventListener('DOMContentLoaded', () => {
function crearNavegacion(){
  const menuItems = [
    {
      texto: 'Index',
      enlace: 'index.html',
    },
    {
      texto: 'Productos',
      enlace: 'productos',
    },
    {
      texto: 'Login',
      enlace: 'login.html',
    },
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


//appendChild agrega al elemento a como hijo del elemento li
li.appendChild(a);
navList.appendChild(li);
});
}});


/**crear un efecto subrayado dinamico para los li de las pages***/
//primero creo las paginas con una variable. ver por qué no funciona!!

let paginas = ['principal', 'nosotros', 'contacto', 'productos' ];
paginas.forEach((pagina)=> {
  let li = document.createElement('li');
  li.textContent= pagina; li.style.position = 'relative';
  li.style.color = '#ffff';
  li.style.fontSize = '1.2rem';
  const underline = document.createElement('div');
  underline.style.position='absolute';
  underline.style.bottom = '0';
  underline.style.left = '35px';
  underline.style.width = '100%';
  underline.style.height = '2.5px';
  underline.style.background = '#fafafa';
  underline.style.transform = 'translateX(-50%)';
  underline.style.transition = 'transform 0.4s ease-in-out';   

  li.appendChild(underline); li.addEventListener('mouseover', ()=>
{
underline.style.transform = 'translateX(0)';});

li.addEventListener('mouseout', ()=>{
  underline.style.transform = 'translateX(-50%)';
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
ofertas.style.fontFamily = "manrope";
ofertas.style.fontWeight = "700";
ofertas.style.fontSize = "12rem";
console.log('ofertas');

/*****************************************carrito*****************************************/


//creo un array de productos**************************************************
const productos = [
  {id: '1',
    nombre:'lentes de sol',
    precio: 45000,
    descripcion: 'Esto es una descripción',
          colores:["verde", "azul", "negro"],
          stock: 4,
          imagen: 'assets/08.png' },

  {id: '2',
          nombre:'Lentes de sol',
          precio: 70000,
          descripcion: 'otra descripción',
          colores:["verde", "rosa", "negro"],
          stock: 14,
          imagen:'img/src'},
          
  {id: '3',
                    nombre:'lentes acetato',
                    precio: 80000,
                    descripcion: 'lesto es una descripción',
                          colores:["verde", "azul", "negro"],
                          stock: 4,
          imagen:'img/src'},
  {id: '4',
                            nombre:'jsjs',
                            precio: 45000,
                            descripcion: 'lLll',
                                  colores:["verde", "azul", "negro"],
                                  stock: 4,
          imagen:'img/src'},
  {id: '5',
                                    nombre:'jsjs',
                                    descripcion: 'lLll',
                                          colores:["verde", "azul", "negro"],
                                          stock: 4,
          imagen:'img/src'},
  {id: '6',
                                            nombre:'jsjs',
                                            descripcion: 'lLll',
                                                  colores:["verde", "azul", "negro"],
                                                  stock: 4,
          imagen:'img/src'},
  {id: '7',
                                                    nombre:'jsjs',
                                                    descripcion: 'lLll',
                                                          colores:["verde", "azul", "negro"],
                                                          stock: 4,
          imagen:'img/src'},
  {id: '8',
                                                            nombre:'jsjs',
                                                            descripcion: 'lLll',
                                                                  colores:["verde", "azul", "negro"],
                                                                  stock: 4,
          imagen:'img/src'},
  {id: '9',
            nombre:'jsjs',
            descripcion: 'lLll',
                  colores:["verde", "azul", "negro"],
                  stock: 4,
          imagen:'img/src'},                                                               
  {id: '10',
                                                                            nombre:'jsjs',
                                                                            descripcion: 'lLll',
                                                                                  colores:["verde", "azul", "negro"],
                                                                                  stock: 4,
          imagen:'img/src'},
  {id: '11',
                                                                                    nombre:'lentes de sol',
                                                                                    descripcion: 'Esto es una descripción',
                                                                                          colores:["verde", "azul", "negro"],
                                                                                          stock: 4,
          imagen: 'assets/01.png'},
  {id: '12',
            nombre:'Lentes',
            descripcion: 'otra descripción',
                  colores:["verde", "rosa", "negro"],
                  stock: 14,
          imagen:'img/src'},                
  {id: '13',
            nombre:'Lentes',
            descripcion: 'otra descripción',
                  colores:["verde", "rosa", "negro"],
                  stock: 14,
          imagen:'img/src'},                       
  {id: '14',
            nombre:'Lentes',
            descripcion: 'otra descripción',
                  colores:["verde", "rosa", "negro"],
                  stock: 14,
          imagen:'img/src'},                                                                              
  {id: '15',
            nombre:'Lentes',
            descripcion: 'otra descripción',
                  colores:["verde", "rosa", "negro"],
                  stock: 14,
          imagen:'img/src'}, 
                ]

//Creo contenedor de las cards que conecta con el card-container de html
const container = document.getElementById('productos-contenedores');
container.style.display = 'flex';

/*para cada producto itero y creo una nueva tarjeta y le paso un producto*/
productos.forEach((producto)=>{
  //createElement crea un un nuevo elemento html de manera dinamica
  const card= document.createElement('div');

//classList.add nos permite añadir clases
card.classList.add( 'card', 'col-12', 'col-md-4', 'p-2');

const img= document.createElement('img');
card.classList.add('src');
card.classList.add('alt');

  card.innerHTML = `
      <img src="${producto.img}" class="card-img-top" alt="${producto.nombre}">
      <div class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">${producto.descripcion}</p>
        <button class="btn btn-primary" data-id=${producto.id}>Agregar al carrito</button>
      </div>   
  `
container.appendChild(card);
card.appendChild(img);
}  );

/*****************************************carrito compras*****************************************/

let carrito = JSON.parse(localStorage.getItem('carrito')) || []; // Recuperar carrito al cargar la página

function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);

    if (producto) {
        carrito.push(producto);
        actualizarCarrito();
        guardarCarrito(); // Guardar carrito en Local Storage
        console.log("El carrito se ha actualizado");
    }
}

function actualizarCarrito() {
    const carritoContainer = document.getElementById('carrito-container');
    carritoContainer.innerHTML = ``; // Vaciar contenedor

    carrito.forEach(producto => {
        const productoElemento = document.createElement('div');
        productoElemento.innerHTML = `
            <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">${producto.descripcion}</p>
            <p class="card-text">${producto.precio}</p>
            <button onclick="eliminarDelCarrito(${producto.id})">Eliminar del carrito</button>
        `;
        carritoContainer.appendChild(productoElemento);
    });
}

function eliminarDelCarrito(id) {
    carrito = carrito.filter(p => p.id !== id); // Filtrar el carrito
    actualizarCarrito();
    guardarCarrito(); // Guardar carrito en Local Storage
}

function guardarCarrito() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

document.addEventListener('DOMContentLoaded', () => {
    actualizarCarrito();
});



//ordeno productos por más nuevos, precios, mas vendidos, destacados

//uso el reduce para algo 

//calculo el total de la compra


//redireccionar a la página de pagos

//calcular envíos

const nuevoEvento = document.getElementById('nuevo-evento'); 
nuevoEvento.addEventListener('click', () =>{
 alert('Esto es un nuevo evento!')
 });
 nuevoEvento.addEventListener('mousemove', () =>{
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

//Ver cómo agrego las imagenes!//

//local storage//


/*
//display flex para los items
navList.style.display = 'flex';
navList.style.justifyContent = 'space-between';

//Array vacio para ingresar productos//
let productosNuevos = [];

//Array de objetos (productos con descuento)//
let productosConDescuento = [
    { nombre: 'vanity', colores: ['rosa', 'verde', 'negro'], precioLista: 15000, productId: '1231', descripcionProducto: 'Lentes de sol de acetato y plata' },
    { nombre: 'lotus_flower', colores: ['verde', 'negro'], precioLista: 19000, productId: '1238', descripcionProducto: 'Lentes de sol de acetato y plata' },
    { nombre: 'redox', colores: ['rosa', 'verde', 'azul'], precioLista: 28000, productId: '1235', descripcionProducto: 'Lentes de sol de acetato y plata' },
];
console.log('productosConDescuento');

//creo una clase y uso el constructor  de producto para asignarle parámetros//
class Producto {
    constructor(nombre, colores, precioLista, Id, descripcion) {
        this.nombre = nombre
        this.colores = colores
        this.precioLista = precioLista
        this.Id = Id
        this.descripcion = descripcion
    }    
}

//creo un nuevo objeto "Producto"//

const producto1 = new Producto();
console.log(typeof producto1);

const producto2 = new Producto();
console.log(typeof producto2);

const producto3 = new Producto();
console.log(typeof producto3);

let precioLista = parseInt(prompt);
console.log(typeof precioLista);
//porcentaje de descuento incompleto ver como soluciono una vez tenga creados los productos//
let porcentajeDescuento = parseInt(prompt);

precioFinalDescuento =(parseInt (precioLista - porcentajeDescuento)) ;
console.log("El precio del producto con descuento es:" + precioFinalDescuento);

function buscadorProducto(nombre, precio_lista, precio_final, color) {
    const resultadosBusqueda = [];}

//cards ocultar y mostrar contenido de product//
/*primero creo la variable cards y le paso el método querySelectorAll
 que va a levantar todos los elementos de html que coincidan con el nombre de la variable
const cardsHover = document.querySelectorAll("card");
cards.forEach(card => {
  card.addEventListener('mouseover', () => {
    card.classList.add('hover');
  });
  card.addEventListener('mouseout', () => {
    card.classList.remove('hover');
  });
});

/*
// ficha producto
//creo una clase y uso el constructor  de producto para asignarle parámetros
class Producto {
  constructor(nombre, colores, precioLista, Id, descripcion, imagen) {
    this.nombre = nombre
    this.colores = colores
    this.precioLista = precioLista
    this.Id = Id
    this.descripcion = descripcion
    this.imagen = imagen
  }

}

/*creo un nuevo objeto "Producto"
const producto1 = new Producto("sasasa", "verde", 14000, 47, "Lentes de Sol",);
console.log(producto1);

const producto2 = new Producto("pepepe", "verde", 14000, 74, "Lentes de Sol");
console.log(producto2.nombre);

const producto3 = new Producto("jdjdjd", "verde", 14000, 97, "Lentes de Sol");
console.log(producto3);

//Ver cómo agrego las imagenes!//

//local storage//



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

/**************************añadir productos al carrito de compras******************** */
/*productos seleccionados para el carrito*/

let productosSeleccionados = [];
let productosAñadidos = []; 

productosSeleccionados.forEach(productoSeleccionado =>
  {
    
    alert("tu producto ha sido añadido al carrito!")})

/*
Si el producto seleccionado se confirma = añadir carrito si no eliminar producto seleccionado
productosAñadidos = productosSeleccionados */


