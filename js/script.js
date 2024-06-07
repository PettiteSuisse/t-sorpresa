// VARIABLES DECLARADAS
var posXNave= 610;
var posYNave=600;
var posXBala = posXNave;
var posYBala = posXNave+10;
var vYBala = 2;
let imagenFondo;
let imagenNave;
// FUNCIONES QUE NECESITO
//cargar imagenes y sonidos
function preload (){
    imagenFondo = loadImage('/assets/espacio.jpg');
    imagenNave = loadImage('/assets/nave.png');
}
//funcion asociada a acciones con teclas
function keydown(){ 
    if (keyIsDown(37) && posXNave > 0) { // movimiento hacia la izquierda
        posXNave = posXNave-10;
      }
      if(keyIsDown(39) && posXNave < (1280-60)){ //movimiento hacia la derecha
        posXNave = posXNave +10;
      }
      if(keyIsDown(32)){ //movimiento de disparo
        rect(posXBala,posYNave,5,10);
        console.log("dispara");
      }
}


// CUANDO SOLO NECESITO QUE SE EJECUTE 1 SOLA VEZ
function setup(){
createCanvas(1280,720);
background(imagenFondo);
}


/*CUANDO NECESITO QUE SE EJECUTE EN TODOS LOS FRAMES*/
function draw(){
background(imagenFondo);

    //LA NAVE
image(imagenNave,posXNave,posYNave,60,40);
keydown();
    
}