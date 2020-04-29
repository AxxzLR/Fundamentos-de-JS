//Dado que JS no soporta la herencia por que no soporta clases, a su vez hay prototipos, en los cuales se le agregan metodos.
//La finalidad de la herencia es la de crear un objeto, que tenga características comunes

//Las clases de JavaScript son introducidas en el ECMAScript 2015 y son una mejora en la sintaxis sobre la herencia basada en prototipos de JavaScript.
//No olvidar que se sigue trabajando con prototipos.

//Definiremos la clase de persona 
class Persona {
    constructor(Nombre, Apellido, Edad, Altura, Saludo = 'Hola') {
        this.Nombre = Nombre
        this.Apellido = Apellido
        this.Edad = Edad
        this.Altura = Altura
        this.Saludo = Saludo
    }

    //Metodos
    Saludar(fn) {
        // debugger
        console.log(`${this.Saludo}, me llamo ${this.Nombre} ${this.Apellido}`)
        //Algunos valores se comportan como booleanos, por ejemplo
        //null, undefined, 0, '' (string vacio) se asimilan como false
        //objeto, array (aunque esten vacios), numero, cadena, caracter se asimilan como true
        if(fn){
            //se manda llamar la funcion que se paso como parametro
            fn(this.Nombre, this.Apellido)
        }
    }

    SoyAlto() {
        var esAlto = this.Altura >= 1.70
        var ret = esAlto ? "Es Alto/a" : "No es alto/a" //Ternaria "condición ? exprSiTrue : exprSiFalse"
        console.log(ret)
        return esAlto
    }
}

//Declaramos la clase Desarrollador que heredara a Persona
class Desarrollador extends Persona {
    constructor(Nombre, Apellido, Edad, Altura) {
        super(Nombre, Apellido, Edad, Altura, 'Hola Mundo')
    }
    //agregar metodo para saludar
    Saludar(fn) {
        //Truco! podemos desestructurar un objeto en variables de la siguiente forma
        var {Nombre, Apellido, Saludo} = this
        // debugger
        console.log(`${Saludo}, me llamo ${Nombre} ${Apellido} y soy desarrollador`)
        if(fn){
            //se manda llamar la funcion que se paso como parametro
            fn(Nombre, Apellido, true)
        }
    }
}


//funciones como parametros
function responderSaludo(Nombre, Apellido, esDev){
    console.log(`Hola, ${Nombre} ${Apellido}`)
    if(esDev){
        console.log(`Que gusto que seas desarrollador`)
    }
}


//Implementacion
var Karen = new Persona('Karen', 'Santamaria', 24, 1.70, 'Hi')
var Axel = new Desarrollador('Axel', 'López', 24, 1.65)

Karen.Saludar(responderSaludo)
Axel.Saludar(responderSaludo)


// var Karen = new Desarrollador('Karen', 'Santamaria', 24, 1.70, 'Hi')
// Karen.Saludar()
// Karen.SoyAlto()