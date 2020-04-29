//console.log('Hola Mundo JS!');
//variables String
var nombre = 'Axel', apellido = 'Lopez';
// var edad = 24;
// console.log('Hola ' + nombre + ' ' + apellido);
// console.log('Tengo ' + edad + ' años');
var nombreEnMayusculas = nombre.toUpperCase();
var apellidoEnMinusculas = apellido.toLowerCase();

var primeraLetraDelNombre = nombre.charAt(0);
var cantidadDeLetrasDelNombre = nombre.length;
//var nombreCompleto = nombre+' '+apellido;
var nombreCompleto = `${nombre} ${apellido.toUpperCase()}`;
var str = nombre.substr(1, 2);
//var aux = prompt('Ingresa tu nombre')
var ultimaLetraDelNombre = nombre.charAt(nombre.length - 1);

//clase 2
var a = 15, b = 20;
var vSuma = a + b;
var vResta = a - b;
var vMultiplicacion = a * b;

var valorDeVino = 200.3
var total = valorDeVino * 3
var totall = valorDeVino * 100 * 3 / 100
var totalStr = totall.toFixed(3);
var total2 = parseFloat(totall);
var totalx = Math.round(valorDeVino * 100 * 3 / 100)

var pizza =8;
var personas =2;
var RebanadasPorPersona = pizza/personas;
