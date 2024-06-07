// crea un objeto coche que tenga marca, modelo, año de lanzamiento, precio, peso, motor
// Función devolver velocidad máxima del coche = se calcula con el peso/motor

class Coche {
    constructor (marca, modelo, año, precio, peso, motor){
        this.marca = marca;
        this.modelo = modelo;
        this.año = año,
        this.precio = precio;
        this.peso = peso;
        this.motor = motor;
    }
    velMax(){
        var resultado = (this.peso/this.motor)
        alert(resultado);
    }
}
//
var coche = new Coche (Nissan,Qasqaui,2017,17000,4,500) 
//
function setup(){
    createCanvas(1280,720);
    background(230);
    }
    
    
//CUANDO NECESITO QUE SE EJECUTE EN TODOS LOS FRAMES
    function draw(){
    coche.pesoMax();
    }


// javascrip.info/array array operations importance: 5
// (....) - objetos hello, object importancia: 5
// 