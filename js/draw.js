var worm;
var s;
var scl = 20;
var food;
var counter = 0;
var foodSize = 1;
var fps = 5;
var blocks = [];

function setup() {
    createCanvas(600, 600);
    worm = new Worm();
    food = new Food();
    frameRate(fps);
    pickLocation();
    // To place blocks
    // addBlocks();
}


function addBlocks() {
    // Add 5 blocks at random location
    for(let i = 0; i < 5; i++) {
        let block = new Block();
        var cols = floor(width/scl);
        var rows = floor(height/scl);
        blockVector = createVector(floor(random(cols)), floor(random(rows)));
        blockVector.mult(scl);
        block.update(foodVector, foodVector.x, foodVector.y, foodSize);
    }
}

function pickLocation() { //picking random location for a food
    var cols = floor(width/scl);
    var rows = floor(height/scl);
    foodVector = createVector(floor(random(cols)), floor(random(rows)));
    foodVector.mult(scl);
    // After every 5th food, give food of double size
    if (counter === 5) {
        foodSize = 1;
        food.update(foodVector, foodVector.x, foodVector.y, foodSize);
        counter = 0;
    } else {
        foodSize = 1;
        food.update(foodVector, foodVector.x, foodVector.y, foodSize);
        counter++;
    }
}

function draw() {
    background(51);
    food.show(); 
    if (worm.eat(food, foodSize)) {
        if (worm.total % 5 === 0) {
            fps = fps + 2;
            frameRate(fps);
        }
        pickLocation();
    }
    if (worm.death()) {
        counter = 0;
        foodSize = 1;
        fps = 5;
        frameRate(fps);
    }
    worm.update();
    worm.show();
}

window.addEventListener("keydown", function(evt) {
    if (evt.defaultPrevented)
    {
        return;
    }
    switch(evt.keyCode)
    {
        case 37:
            worm.dir(-1, 0);
            break;
        case 38: 
            worm.dir(0, -1);
            break;
        case 39:
            worm.dir(1, 0);
            break;
        case 40: 
            worm.dir(0, 1);
            break;
        default:
        return;
    }
});