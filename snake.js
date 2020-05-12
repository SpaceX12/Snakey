class Snake{
    constructor(x, y, width, height){
        
        this.x = 0;
        this.y = 0;
        this.xspeed = 1;
        this.yspeed = 0;

    }

    dir(x, y){
        this.xspeed = x;
        this.yspeed = y;
    }

    update(){
        this.x = this.x + this.xspeed;
        this.y = this.y + this.yspeed;
    }

    display(){
        fill(255, 255, 255);
        rect(this.x, this.y, 10, 10);
    }
}