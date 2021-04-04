class Paper{
	constructor(x,y,r)
	{
	var options = {
		
        isStatic:false,

		'density':1.2,
		'friction': 0,
		'restitution':0.3

	}
		this.image = loadImage("paper.png")
	
	    this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			
			fill("white");
			
			//draw the ellipse here to display the rubber ball
            ellipse(0,0,this.r,this.r);
			imageMode(CENTER);
            image(this.image,0, 0, 75,75);
			pop()
	}

}