var s, apple;

function setup(){
    createCanvas(600, 600);
    s = new Snake();
}

function draw(){
    background(11, 23, 45);

  /*if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);

    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);

    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);

    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);

    }*/

    //s.update();
    s.display();
}

