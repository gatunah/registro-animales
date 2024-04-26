import Animal from './Animal.js';

class Aguila extends Animal {
  constructor(nombre, edad, img, comentarios, ) {
    super(nombre, edad, "assets/imgs/Aguila.jpg", comentarios, "assets/sounds/Chillido.mp3");
    this.obtenerSonido = this.chillar();
  }

  chillar() {
    return this.sonido;
  }
}
export default Aguila;