//1.-Crear las clases representadas en el diagrama implementando la herencia indicada.
//5.-Dividir el código en módulos
import Leon from "./Leon.js";
import Lobo from "./Lobo.js";
import Oso from "./Oso.js";
import Aguila from "./Aguila.js";
import Serpiente from "./Serpiente.js";

$(document).ready(function () {
    let animalesEnInvestigacion = [];
    //3.-Realizar una consulta asíncrona utilizando una función async/await para obtener las imágenes correspondientes a los animales.
    $("#animal").on("change", async function () {
        const selectAnimal = $(this).val();
        await mostrarImgAnimal(`assets/imgs/${selectAnimal}.jpg`);
    });
    ///ENVIO FORMULARIO
    $("#formulario").submit(function(event) {
        event.preventDefault(); 
        
        const selectAnimal = $("#animal").val();
        const selectEdad = $("#edad").val();
        const inputComentarios = $("#comentarios").val().trim();
        console.log(selectAnimal, selectEdad, inputComentarios);

        //7.-Validar que el usuario haya asignado todos los datos del animal antes de que éste sea agregado a la tabla.
        if(selectAnimal == undefined || selectEdad == undefined || inputComentarios == ""){
            alert("Debes ingresar todos los valores");
        }else{
            console.log(animalesEnInvestigacion);
            const animal = crearAnimal.retornoAnimal(selectAnimal, selectEdad, inputComentarios);
            console.log(animal);
            animalesEnInvestigacion.push(animal);
            despejarDatos();
        }
        mostrarListaAnimales();
        
    });
    //2.-Crear las instancias de las clases utilizando los datos del formulario.
    //4.-Realizar por lo menos una función autoejecutable IIFE.
    const  crearAnimal = (() =>{
        const funcionPrivada = (selectAnimal, selectEdad, inputComentarios) =>{
        let animal;
        switch (selectAnimal) {
            case "Leon":
                animal = new Leon(selectAnimal, selectEdad,  inputComentarios);
                break;
                case "Lobo":
                    animal = new Lobo(selectAnimal, selectEdad, inputComentarios);
                    break;
                case "Oso":
                    animal = new Oso(selectAnimal, selectEdad,  inputComentarios);
                    break;
                case "Aguila":
                    animal = new Aguila(selectAnimal, selectEdad, inputComentarios);
                    break;
                case "Serpiente":
                    animal = new Serpiente(selectAnimal, selectEdad, inputComentarios);
                    break;
                default:
                    console.error("Animal no reconocido");
        }return animal;}
        const funcionPublica = (selectAnimal, selectEdad, inputComentarios) => {
            return funcionPrivada(selectAnimal, selectEdad, inputComentarios);
        }
        return{
            retornoAnimal: (selectAnimal, selectEdad, inputComentarios) => {
                return funcionPublica(selectAnimal, selectEdad, inputComentarios);
            }
        }
    })();
    function mostrarImgAnimal(url) {
        $("#preview").empty();
        return new Promise((resolve, reject) => {
            const imgElement = $("<img>").attr("src", url).addClass("img-thumbnail img-preview");
            imgElement.on('load', () => {
                $("#preview").append(imgElement);
                resolve(); //RESUELTA
            });
            imgElement.on('error', () => {
                reject('Error al cargar la imagen'); //SE RECHAZA
            });
        });
    }
    //6.-Utilizar la manipulación del DOM para mostrar en la tabla los animales registrados con el formulario.
    function mostrarListaAnimales() {
        $("#Animales").empty();

        const contenedor = $("<div>").addClass("container-fluid");
        const fila = $("<div>").addClass("row");
    
        //ITERACION ARREGLO
        animalesEnInvestigacion.forEach(function(animal) {
            const tarjeta = $("<div>").addClass("col-lg-4 col-mb-6 participante");
            const tarjetaInterior = $("<div>").addClass("card h-100 card-interior");
            const imagen = $("<img>").addClass("card-img-top").attr("src", animal.img);
            
            //9.-Programar la interacción del botón de audio, en donde deberás reproducir el sonido del animal en el sitio web.
            const reproductorAudio = $("<audio>").addClass("card-audio").attr({
                "controls": "true",
                "src": animal.obtenerSonido
            });
            
            tarjetaInterior.append(imagen);
            tarjetaInterior.append(reproductorAudio);
            tarjeta.append(tarjetaInterior);
            fila.append(tarjeta);

            //CLICK MODAL
            tarjeta.on('click', function () {
                $('#exampleModal').modal('show');
                funcionamientoModal(animal);
            });
        });
        contenedor.append(fila);
    
        $("#Animales").append(contenedor);
    }
    //10.-Mostrar el detalle de cada animal en una ventana modal al ser presionada su imagen.
    function funcionamientoModal(animal){
        $(".modal-body").empty();
        const imgModal = $("<img>").attr({
            "src": animal.img,
            "alt": `Foto de ${animal.nombre}`
        }).addClass("img-thumbnail");
        const div = $("<div>").addClass("text-center text-white");
        const infoModal = $("<p>").html(`<br>${animal.edad}<br> <b>Comentarios<b><br> ${animal.comentarios}`);
        div.append(imgModal);
        div.append(infoModal);
        $(".modal-body").append(div);
    }

    //8.-Devolver el formulario en un estado inicial luego de registrar a cada animal.
    function despejarDatos(){
        $("#animal").prop('selectedIndex', 0);//SE DEJA EN INDICE 0
        $("#edad").prop('selectedIndex', 0);
        $("#comentarios").val("");
        $(".img-preview").remove();
    }
});
