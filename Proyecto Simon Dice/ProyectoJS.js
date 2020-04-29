//#region Elementos
//Menu
const rndTotal = document.getElementById('rndTotal')
const rndActual = document.getElementById('rndActual')
const Score = document.getElementById('Score')
const HomeMenu = document.getElementById('HomeMenu')
const MenuError = document.getElementById('MenuError')
const indUser = document.getElementById('indUser')
const exitGame = document.getElementById('exitGame')
var Puntaje = 0

//Botones de juego
const Verde = document.getElementById('btnUpLeft')
const Azul = document.getElementById('btnUpright')
const Rojo = document.getElementById('btnDownLeft')
const Amarillo = document.getElementById('btnDownright')

//Notificacion
const Notification = document.getElementById("Notification");
const title_notify = document.getElementById("title_notify");
const text_notify = document.getElementById("text_notify");
//#endregion

//#region Juego
class Juego {
    constructor() {
        this.inicializar = this.inicializar.bind(this)
        if (this.inicializar()) {
            this.generarSecuencia()
            setTimeout(() => this.siguienteNivel(), 500)
        }


    }

    inicializar() {
        this.elegirColor = this.elegirColor.bind(this) //funcon elejirColor no pierda contexto
        this.salirJuego = this.salirJuego.bind(this)
        this.siguienteNivel = this.siguienteNivel.bind(this)
        this.Colores = {
            Verde,
            Azul,
            Amarillo,
            Rojo
        }
        this.Nivel = 1
        this.Niveles = parseInt(document.getElementById('txtNivel').value, 10);
        var ret = this.Niveles === '' || this.Niveles < 1 || this.Niveles > 30 || isNaN(this.Niveles)
        if (ret) {
            this.setMensajeError('Seleccione un nivel valido.')
        }
        else {
            rndTotal.innerHTML = this.Niveles
            //rndActual.innerHTML = this.Nivel
            //HomeMenu.classList.add('hide')
            this.togglebtnEmpezar()
        }
        return !ret
    }

    togglebtnEmpezar() {
        HomeMenu.classList.toggle('hide')
    }

    generarSecuencia() {
        this.Secuencia = new Array(this.Niveles).fill(0).map(n => Math.floor(Math.random() * 4))
    }

    siguienteNivel() {
        rndActual.innerHTML = this.Nivel
        this.SubNivel = 0
        this.iluminarSecuencia()
        //this.agregarEventosClick()
    }

    transformarNumeroAColor(numero) {
        switch (numero) {
            case 0:
                return 'Verde'
            case 1:
                return 'Azul'
            case 2:
                return 'Amarillo'
            case 3:
                return 'Rojo'
        }
    }

    transformarColorANumero(color) {
        switch (color) {
            case 'Verde':
                return 0
            case 'Azul':
                return 1
            case 'Amarillo':
                return 2
            case 'Rojo':
                return 3
        }
    }

    apagarColor(color) {
        this.Colores[color].classList.remove('ligth')
    }

    agregarEventosClick() {
        //agregar Manejador de eventos
        this.Colores.Verde.addEventListener('click', this.elegirColor)
        this.Colores.Azul.addEventListener('click', this.elegirColor)
        this.Colores.Amarillo.addEventListener('click', this.elegirColor)
        this.Colores.Rojo.addEventListener('click', this.elegirColor)
        exitGame.addEventListener('click', this.salirJuego)
    }

    eliminarEventosClick() {
        //remover Manejador de eventos
        this.Colores.Verde.removeEventListener('click', this.elegirColor)
        this.Colores.Azul.removeEventListener('click', this.elegirColor)
        this.Colores.Amarillo.removeEventListener('click', this.elegirColor)
        this.Colores.Rojo.removeEventListener('click', this.elegirColor)
        exitGame.removeEventListener('click', this.salirJuego)
    }

    elegirColor(ev) {
        //ev sera el evento del boton (elemento) al que se realizo la accion
        //this sera el boton (elemento) al que se realizo la accion
        //aqui se pierde el contexto ya que this ya no es el "juego"
        const nombreColor = ev.target.dataset.color //Obtener el valor data-color del boton
        const numeroColor = this.transformarColorANumero(nombreColor)
        this.iluminarColor(nombreColor)
        if (numeroColor === this.Secuencia[this.SubNivel]) {
            this.SubNivel++
            this.aumentarScore(this.SubNivel)
            if (this.SubNivel === this.Nivel) {
                this.Nivel++
                this.eliminarEventosClick()

                if (this.Nivel === (this.Niveles + 1)) {
                    this.indicacarAUsuario('ok')
                    setTimeout(() => this.ganoJuego(), 450);
                }
                else {
                    //alert('Ronda Correcta siguiente nivel')
                    //setTimeout(this.siguienteNivel(), 2000)//Corre sin esperar el timeout
                    //setTimeout(() => this.siguienteNivel(), 2000) //funciona de manera correcta
                    this.indicacarAUsuario('ok')
                    setTimeout(this.siguienteNivel, 1500)

                }
            }
        }
        else {
            this.indicacarAUsuario('error')
            setTimeout(() => this.perdioJuego(), 450);
        }
    }

    aumentarScore(ronda) {
        console.log(`El puntaje es ${Puntaje}, el nivel es ${ronda}`)
        if (ronda > Puntaje) {
            Puntaje++
            Score.innerHTML = Puntaje;
        }
    }

    resetearElementos() {
        rndTotal.innerHTML = 0
        rndActual.innerHTML = 0
        //HomeMenu.classList.remove('hide')
        this.togglebtnEmpezar()
        this.indicacarAUsuario()
    }

    perdioJuego() {
        swal("Ups!", "Perdiste el Juego", "error").then(() => {
            this.eliminarEventosClick()
            this.resetearElementos()
        })
    }

    salirJuego() {
        swal({
            title: "¿Deseas salir del juego?",
            text: "Al salir se registrara la última ronda ganada en tu score.",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willOut) => {
            if (willOut) {
                swal("¡Juego terminado!", {
                    icon: "success",
                }).then(() => {
                    this.eliminarEventosClick()
                    this.resetearElementos()
                })
            }
            else {
                this.repetirSecuencia()
            }
        });
    }

    ganoJuego() {
        swal("Felicidades", "Ganaste el juego", "success").then(() => this.resetearElementos())
    }

    iluminarColor(color) {
        this.Colores[color].classList.add('ligth')
        setTimeout(() => this.apagarColor(color), 350);
    }

    indicacarAUsuario(action = 'hide') {
        switch (action) {
            case 'wait':
                //Amarillo
                indUser.className = 'etqYellow'
                indUser.innerHTML = 'Espera...'
                break;
            case 'play':
                //Azul
                indUser.className = 'etqBlue'
                indUser.innerHTML = '¡Adelante!'
                break;
            case 'ok':
                //Verde
                indUser.className = 'etqGreen'
                indUser.innerHTML = '¡Correcto! :D'
                break;
            case 'error':
                //Rojo
                indUser.className = 'etqRed'
                indUser.innerHTML = '¡Error! xS'
                break;
            default:
            case 'hide':
                indUser.className = 'etqHide'
                indUser.innerHTML = ''
                break;
        }
    }

    iluminarSecuencia() {
        this.indicacarAUsuario('wait')
        for (let i = 0; i < this.Nivel; i++) {
            const color = this.transformarNumeroAColor(this.Secuencia[i])
            //se utiliza let o const como tipo de variable para que el valor no se sobreescriba con el anterior (Pendiente por que )
            setTimeout(() => this.iluminarColor(color), i * 1000);
            if ((this.Nivel - 1) === i) {
                setTimeout(() => {
                    this.agregarEventosClick()
                    this.indicacarAUsuario('play')
                }, (i * 1000) + 500);
            }
        }
    }

    repetirSecuencia() {
        this.eliminarEventosClick()
        this.iluminarSecuencia()
    }

    //Error al inicializar
    setMensajeError(msj = 'Ocurrio un error', seg = 5) {
        MenuError.innerHTML = msj
        setTimeout(() => MenuError.innerHTML = '', seg * 1000);
    }
}



function EmpezarJuego() {
    window.juego = new Juego()//se coloca la variable dentro de window

}
//#endregion

//#region Notificacion

const ShowNotifi = (title = 'Hola', text = 'Esto es una notificación') => {
    Notification.classList.remove('hide');
    title_notify.innerHTML = title;
    text_notify.innerHTML = text;
}

const CloseNotify = () => {
    Notification.classList.add('hide');
    title_notify.innerHTML = '';
    text_notify.innerHTML = '';
}
//#endregion
