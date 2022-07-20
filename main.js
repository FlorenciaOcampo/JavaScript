/*function promedio() {
    let promedio = parseInt (prompt("Insertar promedio final"));
    if (promedio > 6){
        alert("Aprobado");
    } 
    else{
        alert("Desaprobado. Derecho a Final 26/07");
    }
    }
    promedio();

    console.log("A continuación los mejores promedios de la Facultad de Cs. Médicas. 5to Año.");

    let lista =  ["Martina Rodríguez", "Javier Peralta", "Gonzalo Difresco", "Florencia Pérez", "Pilar Morales", "Joaquin Carrión", "Abril Canosa", "Bruno Sánchez", "Pedro García"];
    console.log(lista);

    console.log("Abanderado Nacional");
    console.log(lista[2]);
    //slice
    console.log("Escoltas de la Bandera Nacional.");
    let bandera = lista.slice(3,5);
    console.log(bandera);

    console.log("Abanderado Bandera Provincial");
    console.log(lista[0]);


    console.log("Escoltas Bandera Provincial");
    let provincial = lista.slice (5,7);
    console.log(provincial);

    console.log("Asistencia Perfecta");
    console.log(lista[1]);

    console.log("Alumnos que le corresponde Bandera y/o reconocimiento");
    lista.splice(7,2);
    console.log(lista);


*/
function Viajes (nombres, edad, ninios, salida, destino) {
    this.nombres = nombres;
    this.edad = edad;
    this.ninios = ninios;
    this.destino = destino;
    this.salida = salida;
}

/*const paris = new Viajes ("Alejandro Ferraro", 23, 1, "23/06", "paris");
console.log(paris);*/



let askViajes = prompt("Nombre/s y Apellido/s del pasajero");
let ask0Viajes = prompt("Edad");
let ask1Viajes = parseInt(prompt("En caso de ser acompañado por niños, ¿Cuántos? De lo contrario ponga '0'"));
let ask2Viajes = prompt("Fecha de salida estimada");
let ask3Viajes = prompt("Indique lugar de destino");

const Viajes2 = new Viajes(askViajes, ask0Viajes, ask1Viajes, ask2Viajes, ask3Viajes)
console.log(Viajes2);


let listaViajes = [
    {lugar:"Alemania", salida: "23/06", precio: 25650},
    {lugar: "Tanzania", salida:"02/09", precio: 17000},
    {lugar: "Abu Dahbi", salida:"05/11", precio: 33200},
    {lugar: "Buenos Aires", salida: "07/07", precio: 5300},
    {lugar: "Bombinhas", salida:"15/07", precio: 15000},
];


listaViajes.forEach(viajes =>{
    console.log( `este viaje es ${viajes.lugar} su salida es ${viajes.salida} y su precio es ${viajes.precio}`);
})

let listaActualizada = listaViajes.map((viajes) => {
    return{
        lugar: viajes.lugar,
        salida: viajes.salida,
        precio: viajes.precio * 1.20 
    }
})

listaActualizada.forEach(viajes =>{
    console.log( `este viaje es ${viajes.lugar} su salida es ${viajes.salida} y su precio "Actualizado" es ${viajes.precio}`);
})