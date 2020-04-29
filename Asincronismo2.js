const API_URL = 'https://pokeapi.co/api/v2/'
const POKE_URL = 'pokemon/:poke'
const opts = { crossDomain: true }

const ConsultaPokemon = function (poke, callback) {
    //debugger
    const getPokemonURL = `${API_URL}${POKE_URL.replace(':poke', poke)}`
    //Se realiza el request con Jquery (verificar como hacerlo con vanilla)
    $
        .get(getPokemonURL, opts, callback)
        .fail(() => console.error(`Sucedió un Error no se pudo obtener el pokemon "${poke}"`))
}


//Esto se conoce como callback hell
ConsultaPokemon(1, function (pokemon) {
    console.log(`${pokemon.forms[0].name}, ¡Yo te elijo! ... ¡Utiliza ${pokemon.abilities[0].ability.name}!`)
    ConsultaPokemon(2, function (pokemon) {
        console.log(`${pokemon.forms[0].name}, ¡Yo te elijo! ... ¡Utiliza ${pokemon.abilities[0].ability.name}!`)
        ConsultaPokemon(3, function (pokemon) {
            console.log(`${pokemon.forms[0].name}, ¡Yo te elijo! ... ¡Utiliza ${pokemon.abilities[0].ability.name}!`)
            ConsultaPokemon(4, function (pokemon) {
                console.log(`${pokemon.forms[0].name}, ¡Yo te elijo! ... ¡Utiliza ${pokemon.abilities[0].ability.name}!`)
                ConsultaPokemon(5, function (pokemon) {
                    console.log(`${pokemon.forms[0].name}, ¡Yo te elijo! ... ¡Utiliza ${pokemon.abilities[0].ability.name}!`)
                    ConsultaPokemon(6, function (pokemon) {
                        console.log(`${pokemon.forms[0].name}, ¡Yo te elijo! ... ¡Utiliza ${pokemon.abilities[0].ability.name}!`)
                    })
                })
            })
        })
    })
})




