import Animal from './Animal.js';

class Oso extends Animal {
    constructor(nombre, edad, img, comentarios) {
      super(nombre, edad, "assets/imgs/Oso.jpg" , comentarios,"assets/sounds/Grunido.mp3");
      this.obtenerSonido = this.grunir();
    }
  
    grunir() {
      return this.sonido;
    }
  }
  export default Oso;