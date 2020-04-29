// //Entendiendo como opera el event loop
// console.log('a')
// console.log('b')
// console.log('c')

// //agregando un call back
// console.log('Se agrega un call back')
// console.log('1')
// setTimeout(() => {
//     console.log('3')
// }, 2000);
// console.log('2')

//
// for (let i = 0; i < 100; i++) {
//     //debugger
//     var esPar = i % 2 === 0
//     if (esPar) {
//         //Se realiza call back y se encola en la cola de tareas, se ejecutara al impirmirse todos los impares
//         setTimeout(() => {
//             console.log(i)
//         }, 5000);
//     }
//     else{
//         //Se colocan en el call stack
//         console.log(i)
//     }
// }


const API_URL = 'https://pokeapi.co/api/v2/'
const POKE_URL = 'pokemon/:poke'
const opts = { crossDomain: true }

// const onPokeResponse = function (pokemon) {
//     console.log(`${pokemon.forms[0].name}, ¡Yo te elijo! ... ¡Utiliza ${pokemon.abilities[0].ability.name}!`)
// }

const ConsultaPokemon = function (pokemon, callback) {
    //debugger
    const getPokemonURL = `${API_URL}${POKE_URL.replace(':poke', pokemon)}`
    //Se realiza el request con Jquery (verificar como hacerlo con vanilla)
    $.get(getPokemonURL, opts, function (pokemon) {
        console.log(`${pokemon.forms[0].name}, ¡Yo te elijo! ... ¡Utiliza ${pokemon.abilities[0].ability.name}!`)
        if (callback) {
            callback();
        }
    }).fail('Ocurrio un error')
}


// var poke =prompt('Consulta un pokemon','pikachu')
// ConsultaPokemon(poke);

//debido al asincronismo, no es posible determinar el orden en el que llegaran los resultados al hacer multiples request
// ConsultaPokemon(1);
// ConsultaPokemon(2);
// ConsultaPokemon(3);
// ConsultaPokemon(4);
//Se aprecia mejor en este ejemplo
// for (let i = 1; i < 101; i++) {
//     ConsultaPokemon(i);
// }

//En esta solucion lo que se pretende es organizar los llamados para que estos se realizen en secuencia.
//Derivado de esto, obtenemos una estructura que hara crecer el codigo de forma exponencial.
//Esto se conoce como callback hell
ConsultaPokemon(1, function () {
    ConsultaPokemon(2, function () {
        ConsultaPokemon(3, function () {
            ConsultaPokemon(4, function () {
                ConsultaPokemon(5, function () {
                    ConsultaPokemon(6)
                })
            })
        })
    })
})



