import Animal from './Animal.js';

class Lobo extends Animal {
    constructor(nombre, edad, img, comentarios) {
      super(nombre, edad, "assets/imgs/Lobo.jpg" , comentarios, "assets/sounds/Aullido.mp3");
      this.obtenerSonido = this.aullar();
    }
  
    aullar() {
      return this.sonido;
    }
  }
  export default Lobo;