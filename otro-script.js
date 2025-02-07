const tituloCards = document.getElementsByClassName('titulo-productos');

//let carrito = JSON.parse(localStorage.getItem('carrito')) || []; // Recuperar carrito al cargar la página


/*intenta obtener el valor almacenado en carrito y si no hay nada devuelve null; json parse 
lo que hace es convertir en objeto el dato que encuentre guardado en sessionstorage
(los valores almacenados en sessionstorage se serializan siempre en json que es texto)
|| [] esto devuelve un arreglo vació aunque no haya nada almacenado , es una buena práctica */ 
let carrito = JSON.parse(sessionStorage.getItem('carrito')) || [];
//creo un array de productos**************************************************
const productos = [
  {id: '1',
    nombre:'lentes de sol',
    descripcion: 'Esto es una descripción',
          colores:["verde", "azul", "negro"],
          stock: 4,
          imagen:'img/src'},

          {id: '2',
            nombre:'Lentes',
            descripcion: 'otra descripción',
                  colores:["verde", "rosa", "negro"],
                  stock: 14,
                  imagen:'img/src'},

                  {id: '3',
                    nombre:'jsjs',
                    descripcion: 'lLll',
                          colores:["verde", "azul", "negro"],
                          stock: 4,
                          imagen:'img/src'},
                          {id: '4',
                            nombre:'jsjs',
                            descripcion: 'lLll',
                                  colores:["verde", "azul", "negro"],
                                  stock: 4,
                                  imagen:'img/src'},
]

/*******************************cards**********************/ 
//Creo contenedor de las cards que conecta con el card-container de html
const container = document.getElementById('productos-contenedores');

/*para cada producto itero y creo una nueva tarjeta y le paso un producto*/
productos.forEach((producto)=>{
  //createElement crea un un nuevo elemento html de manera dinamica
  const card= document.createElement('div');
//classList.add nos permite añadir clases
 
card.classList.add('card');

//Con la propiedad inner.HTML inserto código html
card.innerHTML =`

   <div class="card">
                    <img src="assets/03.png" class="card-img-top" alt="imagen">                  
                      <h4 class="card-text">${producto.nombre}</h4>
                      <p>precio: ${producto.precio}</p>
                       <p>unidades: ${producto.stock}</p>
                      <p>precio: ${producto.precio}</p>                   
                  
                </div>

               
`;


container.appendChild(card)    
   
     

  });



/*Creo una función flecha  parrafos.forEach(parrafo => {}); le paso algunos estilos 
si le paso muchos estilos o si tengo muchos elementos, esto afecta el tiempo de carga?*/ 

/*
<div class="card">
      <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
      <div class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">${producto.descripcion}</p>
        <a href="#" class="btn btn-primary">Agregar al carrito</a>
      </div>
    </div>*/
/*creo un Array de productos Existentes 
let productos = [
    { nombre: 'vanity', colores: ['rosa', 'verde', 'negro'], precioLista: 15000, productId: '1231', descripcionProducto: 'Lentes de sol de acetato y plata' },
    { nombre: 'lotus_flower', colores: ['verde', 'negro'], precioLista: 19000, productId: '1238', descripcionProducto: 'Lentes de sol de acetato y plata' },
    { nombre: 'redox', colores: ['rosa', 'verde', 'azul'], precioLista: 28000, productId: '1235', descripcionProducto: 'Lentes de sol de acetato y plata' },
    { nombre: 'summertime', colores: ['rosa', 'rojo', 'negro'], precioLista: 1900, productId: '1234', descripcionProducto: 'Lentes de sol de acetato y plata' },
    { nombre: 'focus', colores: ['verde', 'negro'], precioLista: 260000, productId: '1232', descripcionProducto: 'Lentes de sol de acetato y plata' },
    { nombre: 'rocket', colores: ['rosa', 'verde', 'violeta'], precioLista: 38000, productId: '1239', descripcionProducto: 'Lentes de sol de acetato y plata' },
    { nombre: 'shali', colores: ['rosa', 'verde', 'negro'], precioLista: 50000, productId: '1244', descripcionProducto: 'Lentes de sol de acetato y plata' },
    { nombre: 'bubble', colores: ['verde', 'negro'], precioLista: 32000, productId: '1245', descripcionProducto: 'Lentes de sol de acetato y plata' },
    { nombre: 'linger', colores: ['negro', 'amarillo', 'azul'], precioLista: 28000, productId: '1246', descripcionProducto: 'Lentes de sol de acetato y plata' }

];*/

/*función constructora
function Producto(nombre, id, descripcionProducto, colores, imagen, precioLista, descuento, stock){
    this.nombre = nombre;
    this.productId = id;
    this.descripcionProducto = descripcionProducto;
    this.colores = colores;
    this.imagen = imagen;
    this.precioLista = precioLista;
    this.descuento = descuento;
    this.stock = stock;
}

const producto1 = new Producto(nombre, id, descripcionProducto, colores, imagen, precioLista, descuento, stock)*/

//CLASE CONSTRUCTORA*******************************************************************
class Producto {
    constructor(nombre, id, descripcion, colores, imagen, precioLista, descuento, stock){
    this.nombre = nombre;
    this.productId = id;
    this.descripcion = descripcion;
    this.colores = colores;
    this.imagen = imagen;
    this.precioLista = precioLista;
    this.descuento = descuento;
    this.stock = stock;
}}

//crear cards//


/*Hacer un nuevo array con método .map para calcular el precio final del producto (precio + cantidad , precio - descuento)*/



/*Array vacio para ingresar productosl//
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
}*/



/*creo un nuevo objeto "Producto"

const producto1 = new Producto();
console.log(typeof producto1);

const producto2 = new Producto();
console.log(typeof producto2);

const producto3 = new Producto();
console.log(typeof producto3);*/



//let precioLista = parseInt(prompt);
//console.log(typeof precioLista);


//porcentaje de descuento incompleto ver como soluciono una vez tenga creados los productos//
let porcentajeDescuento = 0;

precioFinalDescuento =(parseInt (precioLista - porcentajeDescuento)) ;
console.log("El precio del producto con descuento es:" + precioFinalDescuento);



function buscadorProducto(nombre, precio_lista, precio_final, color) {
    const resultadosBusqueda = [];
}

//cards ocultar y mostrar contenido de product//
/*primero creo la variable cards y le paso el método querySelectorAll
 que va a levantar todos los elementos de html que coincidan con el nombre de la variable*/ 
const cards = document.querySelectorAll("card");

/*luego de que defino la variable cards que contiene la clase "card" (array)
uso forEach para iterar sobre cada elemento dentro del array*/


/*hover de las cards  funcional ver como hago un zoom*/
cards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.classList.add('hover');
      });
      card.addEventListener('mouseout', () => {
        card.classList.remove('hover');
      });
});


/*formualrios funcionando eventos de teclado que quiero agregar input, caracteres totales con un contador (no pueden ser mas de 40)
event.key muestra la tecla que se escribe

totalCaracteres = campoTexto.value.lenght + 1;
*/ 

//comillas para plantillas literales ``//

/* <div class="shop text-white">

    <a class="boton-shop btn  btn-lg"
        href="#" role="button">Comprá
    Ahora!</a>
</div>*/ 

//declaro la variable botonShop 
const botonShop = document.querySelector('boton-shop');
botonShop.addEventListener('mouseover', () => {
    botonShop.classList.add('zoom');
  });


/*llamo a la variable con el método addeventListener que es el crea el evento y funciona con dos
estructuras la primera nos pide el tipo de evento y la otra una función

botonShop.addEventListener("click", function() );*/
/*botonShop.addEventListener("click",() => botonShop);*/

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

//local storage/*/


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


/*
Si el producto seleccionado se confirma = añadir carrito si no eliminar producto seleccionado
productosAñadidos = productosSeleccionados */

// unidad 8 manejo de asincronismo y errores 
//https://jsonplaceholder.typicode.com/
/*Javascript es un lenguaje de un solo hilo por lo cual maneja los eventos asincronicos a través de Event loop
fetch es un método que trabaja a partir de then y catch.
no se escribe con comas !
fetch (url: "http://jsonplaceholder.typicode.com  )
  .then(response => response-json())
    .then(data =>{
      console.log(data)})
.catch (error =>{
  error.console("error.message", error)})


  async await 

  

*/ 


/*clase unidad 9 promesas y librerias

Una Promesa en JavaScript es un objeto que representa el resultado de una operación asíncrona que aún no ha terminado, pero que se completará en el futuro.Javascript es un lenguaje de programación
sincronico, lee linea por linea el código y ejecuta.
Esto es útil para trabajar de manera asincrona en nuestros proyectos
lo que es fundamental para trabajar con APIS o bases de datos.

Manejo asincrono y organización del código.
Estados: pending Estado inicial, está en proceso.
        fulfilled se completó y la promesa tiene un valor resultante
        rejected la operación falló y la promesa tiene una razón para el fallo,
        generalmente un error.

Métodos para trabajar los estados de las promesas

then(onFulfilled) Se ejecuta cuando la promesa se resuelve con éxito.
Recibe una función que será llamada con el valor resultante de la promesa.
jsx promesa.then((resultado) => { console.log("Promesa resuelta con valor:", resultado); });

catch(onRejected) Se ejecuta cuando la promesa es rechazada, recibe una función
que será llamada con la razón del rechazo.
jsx promesa.catch((error) => { console.error("Promesa rechazada con Error:", error); });"

finally(onFinally): Este método se ejecuta independientemente de si la promesa fue resuelta o rechazada. Es útil para ejecutar código de limpieza o de finalización, sin importar el resultado de la promesa.
jsx promesa.finally(() => { console.log("Promesa finalizada, sea cual sea el resultado."); });


function getDatosPromesas() {

return new Promise((resolve, reject};

Librerias***
sweet alert
luxon
jquery
Toastify

*****/ 
/****unidad 10 **frameworks***************************
 * Meteor js
 * angular js
 * vue js
 * react js
 * ember js
 * polymer js* 
 
Node.js
Entorno de ejecución javascript que permite ejecutar código fuera del navegador.
Antes de node.js su uso estaba limitado a las apps del  lado del cliente.
Con NodeJS, se puede utilizar JavaScript para desarrollar aplicaciones del lado del servidor, como servidores HTTP, acceder a archivos del sistema, y otras tareas que tradicionalmente requerían lenguajes como Python o Ruby. Esto ha ampliado enormemente las capacidades de JavaScript, permitiendo que sea utilizado tanto en el frontend como en el backend.

NPM es un gestor de paquetes oficial de NodeJS.
Es una herramienta de linea de comandos que permite gestionar las dependencias de un proyecto.
A través de NPM se pueden instalar, eliminar, actualizar modulos y librerias que son necesarios para 
el funcionamiento de una app.
Los módulos instalados se almacenan en node.modules y son reutilizables 
NPM también permite la creación de un archivo package.json, que contiene toda la información relevante sobre el proyecto, como su nombre, versión, autor, dependencias y scripts que pueden ser ejecutados mediante la línea de comandos. Este archivo es esencial para mantener la coherencia y facilitar la colaboración en proyectos de software.






 */