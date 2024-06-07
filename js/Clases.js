// CLASE MARCIANO
class Marciano {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
}

//---------------------------------------------------------------------------------------------------------------

// CLASE NAVE 
class naveJugador{ //vamos a crear la nave para el jugador
    constructor(x,y){//estos parametros son los que doy yo una vez he llamado al objeto para colocarlo
    this.x = x;
    this.y = y; 
    }
    w = 30;
    h = 30;
    url =('/assets/nave.png');
    currentCooldown = 0; // para tiempo dado 
    maxCooldown = 10;
    dibujarLaNave(){
        image(imagenNave,this.x,this.y,this.w,this.h);
    }
    movimientoNave(disparos){
        if (keyIsDown(37)){ // movimiento hacia la izquierda
            this.x = this.x-10;
        }
          if(keyIsDown(39)){ //movimiento hacia la derecha
            this.x= this.x+10;
          }
         if(keyIsDown(32)){ //disparar
            this.disparar(disparos);
          }
    
    disparar(disparos){
        if()
    }
}
//-----------------------------------------------------------------------------------------------------------
//Clase Disparo
    class Proeyctiles{
        y = 690; //esta se declara fuera porque siempre va a aparecer en la misma y, es decir la misma altura;
        constructor(x){
            this.x=x;
        }
        dibujar(){
            Reflect(this.x,this.y,2,10)
        }
        movimiento(){
            this.y -=3;
        }
    }





//---------------------------------------------------------------------------------------------------------------
var disparos = [];
var jugador = new naveJugador(610, 600)
//---------------------------------------------------------------------------------------------------------------
function preload (){
    imagenFondo = loadImage('/assets/espacio.jpg');
    imagenNave = loadImage('/assets/nave.png');
}
    
//--------------------------------------------------------------------------------------------------------------
// PROGRAMA 1 VEZ
function setup(){
    createCanvas(1280,720);
    background(imagenFondo);
    }
    
    
//CUANDO NECESITO QUE SE EJECUTE EN TODOS LOS FRAMES
    function draw(){
    background(imagenFondo);
    jugador.dibujarLaNave();
    jugador.movimientoNave();
}
