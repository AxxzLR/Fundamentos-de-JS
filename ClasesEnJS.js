//Como funcionan las clases en JS
//En JS se conocen como "Prototipos", en JS no existe la herencia.

//Definiremos el prototipo de persona 
function Persona(Nombre, Apellido, Edad, Altura, Saludo = 'Hola') {
    //console.log('Me ejecutaron')
    this.Nombre = Nombre
    this.Apellido = Apellido
    this.Edad = Edad
    this.Altura = Altura
    //Podemos declarar valores default para los parametros asignando el valor en la declaracion de los parametros
    //Nota 'Tratar de dejar los parametros por defecto al final, para tener libertad de incluirlos o no en el llamado'
    this.Saludo = Saludo
    //ó setear el valor directamente en el objeto
    this.Cumpleaños = '01/01/2020'
    //return this //Esto esta implicito en el proceso, por lo cual no se utiliza
}

//Para agregar metodos a nuestros prototipos se hace de la siguiente forma
//Es importante saber que los metodos deben estar Declarados en el codigo antes de que se manden llamar

///Modificacion clase posterior
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

//========================================================================================================================
//Estas se pueden declarar como Arrowfunctios pero el contexto de this cambia, ya que no hace referencia al objeto,
//si no al contexto global que es window, por lo cual todas las propiedades a las que se hace referencia seran undefined,
//Mas adelante se resolvera este tema
// Persona.prototype.Saludar = () => {
//     console.log(`${this.Saludo}, me llamo ${this.Nombre} ${this.Apellido}`)
//     //se utiliza this para acceder a las propiedades del objeto persona.
// }

// Persona.prototype.SoyAlto = () => this.Altura >= 1.70
//========================================================================================================================


//new declara una nueva referencia al objeto (Prototipo) si no se coloca la palabra new "Axel" sera undefined 
var Axel = new Persona('Axel', 'López', 24, 1.65)
var Karen = new Persona('Karen', 'Santamaria', 24, 1.70, 'Hi')

//Ejecutando el metodo Saludar y soyAlto.
// Axel.Saludar()
// Axel.SoyAlto()
// Karen.Saludar()
// Karen.SoyAlto()