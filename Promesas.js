//Promesas
//Entendemos las promesas como valores que aun no conocemos.
//Estas son como cualquier objeto en JS y pueden tener 3 estados.
//  pending: es el estado con el que se inicializa o crea la promesa
//  fulfilled: la promesa se resuelve
//  rejected: ocurrio un error
//Para crear una promesa se realiza de la siguiente forma
// var promesa1 = new Promise(function(resolve, reject){
//     ...
// })
const API_URL = 'https://pokeapi.co/api/v2/'
const POKE_URL = 'pokemon/:poke'
const opts = { crossDomain: true }

function getPokemon(poke) {
    return new Promise((resolve, reject) => {
        const getPokemonURL = `${API_URL}${POKE_URL.replace(':poke', poke)}`
        //Se realiza el request con Jquery (verificar como hacerlo con vanilla)
        $
            .get(getPokemonURL, opts, function (data) {
                resolve(data)
            })
            .fail(() => reject(poke))
    })
}

function elejirPokemon(pokemon) {
    console.log(`${pokemon.name}, ¡Yo te elijo! ... ¡Utiliza ${pokemon.abilities[0].ability.name}!`)
}

function onError(desc) {
    console.log(`Sucedió un error al obtener el pokemon "${desc}"`)
}

//#region Async-await
async function ObtenerPoke() {
    var ids = [1, 2, 3, 4, 5, 6, 7]
    var promesas = ids.map(id => getPokemon(id))
    try {
        var pokes = await Promise.all(promesas)
        console.log(pokes);
        for (let i = 0; i < pokes.length; i++) {
            elejirPokemon(pokes[i])
        }
    } catch (id) {
        onError(id)
    }
}
ObtenerPoke()
//#endregion


//#region Obtener Pokemons de forma paralela.
// var ids = []
// //for (let i = 1; i <= 807; i++) { ids.push(i)}//Llenar array de promesas
// var promesas = ids.map(id => getPokemon(id))
// Promise
//     .all(promesas)
//     //.then(pokemon => console.log(pokemon))
//     .then(function (arrayPokemons) {
//         for (let i = 0; i < arrayPokemons.length; i++) {
//             elejirPokemon(arrayPokemons[i])
//         }
//     })
//     .catch(onError)
//#endregion


//#region Obtener Pokemons de forma secuencial
// getPokemon(1)
//         .then(function (pokemon){
//             console.log(`${pokemon.forms[0].name}, ¡Yo te elijo! ... ¡Utiliza ${pokemon.abilities[0].ability.name}!`)
//             return getPokemon(2)
//         })
//         .then(function (pokemon){
//             console.log(`${pokemon.forms[0].name}, ¡Yo te elijo! ... ¡Utiliza ${pokemon.abilities[0].ability.name}!`)
//             return getPokemon(3)
//         })
//         .then(function (pokemon){
//             console.log(`${pokemon.forms[0].name}, ¡Yo te elijo! ... ¡Utiliza ${pokemon.abilities[0].ability.name}!`)
//             return getPokemon(4)
//         })
//         .then(function (pokemon){
//             console.log(`${pokemon.forms[0].name}, ¡Yo te elijo! ... ¡Utiliza ${pokemon.abilities[0].ability.name}!`)
//             return getPokemon(5)
//         })
//         .then(function (pokemon){
//             console.log(`${pokemon.forms[0].name}, ¡Yo te elijo! ... ¡Utiliza ${pokemon.abilities[0].ability.name}!`)
//         })
//         .catch(onError)
//#endregion

//#region Metodo para obtener cualquier pokemon de forma independiente
function seleccionarPokemon(poke) {
    getPokemon(poke)
        .then(elejirPokemon)
        .catch(onError)
}

// for (let i = 1; i <= 807; i++) {
//     seleccionarPokemon(i);
// }
//#endregion

//Nota: No se deben pasar las funciones instanciadas,
//se deben pasar como parametro o de forma anonima.
//De lo contrario, la funcion se tratara de ejecutar en el instanciamiento.