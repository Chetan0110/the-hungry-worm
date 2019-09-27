function Food() {
    this.x = 0; 
    this.y = 0;
    this.food = null;
    this.size = 20;
    this.times = 1;
    this.update = function(food, x, y, times) {
        this.x = x;
        this.y = y;
        this.food = food;
        this.times = times;
    }

    this.show = function() {
        fill("#ff0000");    
        rect(this.x, this.y, this.size * this.times, this.size * this.times); 
    }
}