import Animal from './Animal.js';

class Leon extends Animal {
  constructor(nombre, edad, img, comentarios, ) {
    super(nombre, edad, "assets/imgs/Leon.jpg" , comentarios, "assets/sounds/Rugido.mp3");
    this.obtenerSonido = this.rugir();
  }

  rugir() {
    return this.sonido;
  }
}
export default Leon;
