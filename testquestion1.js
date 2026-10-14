let posX;
let xSpeed;

function setup(){
    createCanvas(600, 400);
    posX = width/ 2;
    xSpeed = 5;
}

function draw(){
    background("light blue")

    fill("green")

    if (posX >= 600 - 50 || posX <= 400 - 50){
        xSpeed = xSpeed * -1
    }

    posX = posX = xSpeed

    circle(posX, 200, 100)

}
