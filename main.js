/*function promedio() {
    let promedio = parseInt (prompt("Insertar promedio final"));
    if (promedio > 6){
        alert("Aprobado");
    } 
    else{
        alert("Desaprobado. Derecho a Final 26/07");
    }
    }
    promedio();*/

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
