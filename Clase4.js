var nombre = 'Axel', edad = 24;

function impimirEdad(_nombre = 'Nombre', _edad = 1) {
    console.log(`${_nombre} tiene ${_edad} años`);
}

// impimirEdad(nombre, edad);
// impimirEdad('Karen', 25);
// impimirEdad('P1', 44);
// impimirEdad('P2', 35);
// impimirEdad(23, 'px');
// impimirEdad();
// impimirEdad('s');

var Axel = {
    Nombre: 'Axel',
    Apellido: 'López',
    Edad: 24,
    Profesion: 'Programador'
}

// function imprimirNombreEnMayusculas(name) {
//     name = name.toUpperCase();
//     console.log(name);
// }

// function imprimirNombreEnMayusculas(persona) {
//     var name = persona.Nombre.toUpperCase();
//     console.log(name);
// }

function imprimirNombreEnMayusculas({ Nombre }) {
    Nombre = Nombre.toUpperCase();
    console.log(Nombre);
}

function impimirNombre_Edad(persona) {
    var { Nombre } = persona;
    var { Edad } = persona;
    console.log(`Hola me llamo ${Nombre} y tengo ${Edad} años`);
}

//imprimirNombreEnMayusculas(nombre)
// imprimirNombreEnMayusculas(Axel);
// impimirNombre_Edad(Axel);

// function Cumpleaños(persona){
//     persona.Edad+=1;
// }

function Cumpleaños(persona) {
    return {
        ...persona,
        Edad:persona.Edad + 1,
        np :'Hola'
    }
}

var AxelViejo = Cumpleaños(Axel);
