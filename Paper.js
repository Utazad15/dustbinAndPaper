class Paper {
    constructor(x,y,r){
      var options={
          isStatic:false,
          restitution:0.3,
          friction:0,
          density:1.2
      }
      this.x = x;
      this.y = y;
      this.r = r;
      this.body = Bodies.circle(x,y,r/3,options);
      console.log(this.body.position);
      World.add(world,this.body);
      this.image = loadImage("paper.png");
    }
    
    display()
    {
        //console.log(this.body);
        var pos = this.body.position;
          
        push();
        //translate(pos.x,pos.x);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.r,this.r);
        //ellipseMode(CENTER);
        //ellipse(pos.x,pos.y,this.r,this.r);
        pop();
    }
}