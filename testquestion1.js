let posX;
let xSpeed;

function setup(){
    createCanvas(600, 400);
    posX = width/ 2;
    xSpeed = 2;
}

function draw(){
    background("black")

    fill("green")

    if (posX <= 0 + 50 || posX >= 600 - 50){
        xSpeed *= -1
    }

    posX += xSpeed

    circle(posX, 200, 100)

}
