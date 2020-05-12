var s, apple;

function setup(){
    createCanvas(600, 600);
    s = new Snake();
}

function keyPressed(){
    if(key === UP_ARROW){
        s.dir(0, -1);

    }else if(key === DOWN_ARROW){
        s.dir(0, 1);

    }else if(key === RIGHT_ARROW){
        s.dir(-1, 0);
    
    }else if(key === LEFT_ARROW){
        s.dir(1, 0);

    }    
}

function draw(){
    background(11, 23, 45);

    s.update();
    s.display();
}


