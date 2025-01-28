/********************************barra navegación**********************************************/
//creo nav.items desde js con un array//

//array de páginas navegación
const menuItems = [
  {
    texto: 'Index',
    enlace: '',
  },
  {
    texto: 'Productos',
    enlace: '',
  },
  {
    texto: 'Promociones',
    enlace: '',
  },
]

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
  a.href.add = 'item-href';
  a.textContent = 'item.text';

  //appendChild agrega al elemento a como hijo del elemento li
  li.appendChild(a);
  navList.appendChild(li);
});

//display flex para los items
navList.style.display = 'flex';
navList.style.justifyContent = 'space-between';

/********************************banner***************************************************/

//declaro e inicializo la variable ofertas que se muestra
//  en mi html a traves de document.getElementById//
let ofertas = document.getElementById('ofertas');

//le doy estilo con propiedades de js y le paso el contenido del texto"//
ofertas.textContent = "50";
ofertas.style.color = "#df1515";
ofertas.style.fontFamily = "manrope";
ofertas.style.fontWeight = "500";
ofertas.style.fontSize = "12rem";
console.log('ofertas');

/*****************************************carrito*****************************************/


//creo un array de productos**************************************************
const productos = [
  {id: '1',
    nombre:'lentes de sol',
    descripcion: 'Esto es una descripción',
          colores:["verde", "azul", "negro"],
          stock: 4,
          imagen:src= 'assets/01.png' },

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
]

//Creo contenedor de las cards que conecta con el card-container de html
const container = document.getElementById('productos-contenedores');


/*para cada producto itero y creo una nueva tarjeta y le paso un producto*/
productos.forEach((producto)=>{
  //createElement crea un un nuevo elemento html de manera dinamica
  const card= document.createElement('div');
//classList.add nos permite añadir clases
card.classList.add('col-lg-4');
card.classList.add('card');
const img= document.createElement('img');
card.classList.add('src');
card.classList.add('alt');

  card.innerHTML = `

      <img src="${producto.img}" class="card-img-top" alt="${producto.nombre}">
      <div class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">${producto.descripcion}</p>
        <button class="btn btn-primary">Agregar al carrito</button>
      </div>
   
  `
container.appendChild(card);
card.appendChild(img);
}  );



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



const unBoton = document.getElementById('');

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
    const resultadosBusqueda = [];
}

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


//display flex para los items
