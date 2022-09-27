//  inicio del pro
let precioTotal = 0;
let totalProductos = document.getElementById("totalProductos");
totalProductos.innerHTML = `${precioTotal} €`;

//  DECLARACIÓn de los objetos
let objetos = [
    {
        id: "coches",
        precio: 3.50
    },
    {
        id: "tren",
        precio: 6.80
    },
    {
        id: "noria",
        precio: 8
    },
    {
        id: "tiketgratis",
        precio: 1
    },
    {
        id: "avion",
        precio: 10
    },
    {
        id: "comida",
        precio: 2.5
    },
    {
        id: "miedo",
        precio: 8
    },
    {
        id: "platillo",
        precio: 4
    },
    {
        id: "globo",
        precio: 60
    },
    {
        id: "moto",
        precio: 5
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
    totalProductos.innerHTML = precioTotal + "€";
};

const drop = (ev) => {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("text");

    let tiket = objetos.find(objeto => {
        return objeto.id == data;
    });
    precioTotal += tiket.precio;
    totalProductos.innerHTML = `${precioTotal} €`;
    if(precioTotal >= 100) {
        alert("Te vas a gastar más de 100€,");
    }
};
//funcion contar tiempo de las atracciones//
