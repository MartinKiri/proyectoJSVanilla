//  inicio del programa
let precioTotal = 0;
let tiempoTotal = 0;
let totalProductos = document.getElementById("totalProductos");
totalProductos.innerHTML = `${precioTotal} €`;


//  DECLARACIÓn de los objetos
let objetos = [
    {
        id: "coches",
        precio: 3.50,
        tiempo: 180 / 60
    },
    {
        id: "tren",
        precio: 6.80,
        tiempo: 140 / 60
    },
    {
        id: "noria",
        precio: 8,
        tiempo: 300 / 60
    },
    {
        id: "tiketgratis",
        precio: 1,
        tiempo: 0 / 60
    },
    {
        id: "avion",
        precio: 10,
        tiempo: 220 / 60
    },
    {
        id: "comida",
        precio: 2.5,
        tiempo: 0 / 60
    },
    {
        id: "miedo",
        precio: 8,
        tiempo: 300 / 60
    },
    {
        id: "platillo",
        precio: 4,
        tiempo: 250 / 60
    },
    {
        id: "globo",
        precio: 60,
        tiempo: 480 / 60
    },
    {
        id: "moto",
        precio: 5,
        tiempo: 200 / 60
    }
];

//////////////////////  FUNCIONES   ///////////////////////////////

const drag = (ev) => {
    ev.dataTransfer.setData("text", ev.target.id);
};

const allowDrop = (ev) => {
    ev.preventDefault();
};

const vaciar = () => {
    precioTotal = 0;
    tiempoTotal = 0;
    totalProductos.innerHTML = precioTotal + "€";
    totalTiempo.innerHTML = tiempoTotal + " minutos";
};

const drop = (ev) => {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("text");

    let tiket = objetos.find(objeto => {
        return objeto.id == data;
    });
    precioTotal += tiket.precio;
    totalProductos.innerHTML = `${precioTotal} €`;
    totalTiempo.innerHTML = `${tiempoTotal}`;

    //funcion en la que cuenta cuanto tiempo vas a estar en las attrasccions
    tiempoTotal += tiket.tiempo;
    totalTiempo.innerHTML = `${tiempoTotal} minutos`;

    if (precioTotal >= 100) {
        alert("Te vas a gastar más de 100€,");
    }
};
