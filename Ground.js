class Ground {
    constructor() {
      var options = {
          isStatic: true
      }
      this.ground = Bodies.rectangle(450,390,900,20,options);
      //this.width = width;
      //this.height = height;
      World.add(world, this.ground);
    }
    display(){
      var pos =this.ground.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, 900, 20);
    }
  };
