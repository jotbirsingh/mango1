class Tree {
    constructor(x,y,width,height){
        
      
    
    this.body=Bodies.rectangle(x,y,width,height);
    this.width=width;
    this.height=height;  
    this.image=loadImage("tree.png");
    world.add=(World,this.body);
    }
    display() {
        push();
        translate(this.body.position.x, this.body.position.y);
        //rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0,this.width,this.height);
        pop(); 
    }
  }