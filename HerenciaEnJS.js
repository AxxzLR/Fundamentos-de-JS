//Dado que JS no soporta la herencia por que no soporta clases, a su vez hay prototipos, en los cuales se le agregan metodos.
//La finalidad de la herencia es la de crear un objeto, que tenga características comunes

//En JS tenemos Herencia prototipal. "Crear un prototipo hijo que sera un subtipo de otro objeto"
//Cuando se le solicite un metodo, que este prototipo hijo no sepa responder, subira al padre para buscar el metodo en este prototipo
//y asi sucesivamente hasta encontrarlo o terminar los prototipos

//Funcion para Herencia
function heredaDe(prototipoHijo, prototipoPadre) {
    var fn = function () {} //Funcion dummy
    fn.prototype=prototipoPadre.prototype //Se almacena el protoripo padre para no alterarlo
    prototipoHijo.prototype = new fn
    prototipoHijo.prototype.constructor = prototipoHijo
}

//Definiremos el prototipo de persona 
function Persona(Nombre, Apellido, Edad, Altura, Saludo = 'Hola') {
    //console.log('Me ejecutaron')
    this.Nombre = Nombre
    this.Apellido = Apellido
    this.Edad = Edad
    this.Altura = Altura
    this.Saludo = Saludo
}

//Metodos
Persona.prototype.Saludar = function () {
    console.log(`${this.Saludo}, me llamo ${this.Nombre} ${this.Apellido}`)
    //se utiliza this para acceder a las propiedades del objeto persona.
}

Persona.prototype.SoyAlto = function () {
    var esAlto = this.Altura >= 1.70
    var ret = esAlto ? "Es Alto/a" : "No es alto/a" //Ternaria "condición ? exprSiTrue : exprSiFalse"
    console.log(ret)
    return esAlto
}

//Declaramos a Desarrollador que sera un hijo de Persona.
function Desarrollador(Nombre, Apellido, Altura) {
    this.Nombre = Nombre
    this.Apellido = Apellido
    //Para ejecutar la funcion soy alto, debemos pasar el parametro Altura en el objeto desarrollador,
    //para que el prototipo que se asigno de persona lo reconozca.
    this.Altura = Altura
}

//Se debe llamar inmediatamente despues de la declaracion, para no alterar el objeto desarrollador
heredaDe(Desarrollador, Persona)

//agregar metodo para saludar
Desarrollador.prototype.Saludar = function () {
    console.log(`Hola, me llamo ${this.Nombre} ${this.Apellido} y soy desarrollador`)
}


//Implementacion
var Karen = new Desarrollador('Karen', 'Santamaria', 24, 1.70, 'Hi')
Karen.Saludar()
Karen.SoyAlto()