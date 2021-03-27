class Stone {
    constructor(x,y){
        var options = {
            isStatic:false,
            restitution:0,
            stiffness: 0.04,
            length: 10
        }
      
    
    this.body=Bodies.rectangle(x,y,100,100);
    this.width=100;
    this.height=100;  
    this.image=loadImage("stone.png");
    world.add=(World,this.body);
    }
    display() {
        push();
        translate(this.body.position.x, this.body.position.y);
        //rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 100,100);
        pop(); 
    }
  }