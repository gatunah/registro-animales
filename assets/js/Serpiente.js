import Animal from './Animal.js';

class Serpiente extends Animal {
    constructor(nombre, edad, img, comentarios) {
      super(nombre, edad, "assets/imgs/Serpiente.jpg", comentarios, "assets/sounds/Siseo.mp3");
      this.obtenerSonido = this.sisear();
    }
    sisear() {
      return this.sonido;
    }
  }
  export default Serpiente;