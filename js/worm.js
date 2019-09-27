function Worm() {
    this.x = 0; 
    this.y = 0;
    this.xspeed = 1;
    this.yspeed = 0;
    this.total = 0;
    this.tail = [];

    this.update = function() {
        for (var i = 0; i < this.tail.length - 1; i++) {
            this.tail[i] = this.tail[i + 1];
        } 

        if (this.total >= 1) {
            this.tail[this.total - 1] = createVector(this.x, this.y);
        }
      
        this.x = this.x + this.xspeed * scl;
        this.y = this.y + this.yspeed * scl;
    
        this.x = constrain(this.x, 0, width - scl);
        this.y = constrain(this.y, 0, height - scl);

        document.getElementById("score").innerHTML = "Your score: " + (this.tail.length + 1);
    }
    

    this.show = function() {
        fill("#ffffff");
        for (var i = 0; i < this.tail.length; i++) {
            rect(this.tail[i].x, this.tail[i].y, scl, scl);
        }
        rect(this.x, this.y, 20, 20); 
    }

    this.dir = function(x, y) {
        this.xspeed = x;
        this.yspeed = y;
    }

    this.eat = function(pos, foodSize) {
        var d = dist(this.x, this.y, pos.x, pos.y);
        if (d < 1) {
            this.total = this.total + foodSize;
            return true;
        } else {
            return false;
        }
    }

    this.death = function() {
        let gameStatudEl = document.getElementById("game-status");
        for (var i = 0; i < this.tail.length; i++) {
            var pos = this.tail[i];
            var d = dist(this.x, this.y, pos.x, pos.y);
            if (d < 1) {
                this.total = 0;
                this.tail = [];
                gameStatudEl.innerHTML = "You game is over. Try again, pleasee!";
                gameStatudEl.style = "color: red";
                return true;
            }
            gameStatudEl.innerHTML = "";
            return false;
        }

    }
}