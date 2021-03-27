class Mango{
    constructor(x,y){
        var options = {

           isStatic:true,
           restitution:0,
           friction:1
        }
        this.body=Bodies.rectangle(x,y,70,70);
        this.width=70;
        this.height=70;  
        this.image=loadImage("mango.png");
        world.add=(World,this.body);
    } 
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0,70,70);
        pop();
    }
}