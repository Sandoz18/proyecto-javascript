



/*creo const parrafos me sirve para todos los p del documento y le doy especificidad para manipular solo
los de la marquesina*/
const parrafos = document.querySelectorAll("#gratis p");

/*Creo una función flecha  parrafos.forEach(parrafo => {}); le paso algunos estilos 
si le paso muchos estilos o si tengo muchos elementos, esto afecta el tiempo de carga?*/ 
parrafos.forEach(parrafo => {
    parrafo.style.color = "#ffffff";
    parrafo.style.fontFamily = "manrope";    
});


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