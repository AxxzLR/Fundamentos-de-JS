//Datos
var Axel = {
    Nombre: 'Axel',
    Apellido: 'López',
    Altura: '1.65',
    Libros: 10
}

var Karen = {
    Nombre: 'Karen',
    Apellido: 'Santamaria',
    Altura: '1.70',
    Libros: 13
}


var Jesus = {
    Nombre: 'Jesus',
    Apellido: 'Magaña',
    Altura: '1.80',
    Libros: 2
}

var Tania = {
    Nombre: 'Tania',
    Apellido: 'Rabadan',
    Altura: '1.60',
    Libros: 5
}

//Arreglo
var Personas = [Axel, Karen, Jesus, Tania]

for (var i = 0; i < Personas.length; i++) {
    var persona = Personas[i];
    console.log(`${persona.Nombre} mide ${persona.Altura} metros.`)
}

//ejemplo con valores primitivos
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


//-------filter
//Para filtrar se necesitan dos cosas, los datos y una condicion o criterio.

//Criterio
//const esAlta = persona => persona.Altura>=1.7
const esAlta = ({ Altura }) => Altura >= 1.7
//filtrado
var personasAltas = Personas.filter(esAlta) //Filter devuelve un arreglo nuevo, sin tocar el de origen

//console.log(personasAltas)

//Reto
const esBajo = ({ Altura }) => Altura < 1.7
var personasBajas = Personas.filter(esBajo)
//console.log(personasBajas)


//filter con valores primitivos
const esPar = (numero) => numero % 2 === 0 // "Reciduo" un numero es par cuando al dividirlo entre 2 su reciduo es 0
var numerosfiltrados = numeros.filter(esPar)

//console.log(numerosfiltrados)


//-------map
//devolvera un nuevo array en el cual va a modificar cada uno de los elementos del array original.
//Pasar de metros a centimetros

const pasarAlturaACms = persona => {
    //Este segmento alterara el objeto original
    //persona.Altura *= 100
    //return persona

    //Este segmento generara un objeto nuevo
    return {
        ...persona,
        Altura: persona.Altura * 100
    }

}

var personaCms = Personas.map(pasarAlturaACms)

//console.log(personaCms)

//map con valores primitivos (en este caso la funcion map siempre devolvera un nuevo elemento y el original se respetara)
const xDos = numero => numero *= 2

var numerosx2 = numeros.map(xDos)

//console.log(numerosx2)


//-----reduce

const reducer = (acum, { Libros }) => acum + Libros

var totaldeLibros = Personas.reduce(reducer, 0) //(funcion redutora, acum)

console.log(totaldeLibros)

//ejemplo con valores primitivos

const reduNum = (acum, numero) => acum + numero
const sumaAll = numeros.reduce(reduNum, 0)


console.log(sumaAll)