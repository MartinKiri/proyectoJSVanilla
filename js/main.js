//  inicio del pro
let precioTotal = 0;
let totalProductos = document.getElementById("totalProductos");
totalProductos.innerHTML = `${precioTotal} €`;

//  DECLARACIÓn de los objetos
let objetos = [
    {
        id: "coches",
        precio: 3
    },
    {
        id: "tren",
        precio: 5
    },
    {
        id: "noria",
        precio: 8
    },
    {
        id: "tiketgratis",
        precio: 0.5
    },
    {
        id: "avion",
        precio: 10
    },
    {
        id: "comida",
        precio: 5
    },
    {
        id: "miedo",
        precio: 10
    },
    {
        id: "platillo",
        precio: 35
    },
    {
        id: "globo",
        precio: 10
    },
    {
        id: "moto",
        precio: 8
    }
];

/////////////////////////////////////////////////////

const drag = (ev) => {
    ev.dataTransfer.setData("text", ev.target.id);

};
const allowDrop = (ev) => {
    ev.preventDefault();
};
const drop = (ev) => {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("text");

    let tiket = objetos.find(objeto => {
        return objeto.id == data;
    });
    precioTotal += tiket.precio;
    totalProductos.innerHTML = `${precioTotal} €`;
};
