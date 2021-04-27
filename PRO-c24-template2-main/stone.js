class Stone{
	constructor(x,y)
	{
	var options={
		restitution: 0.8,
		friction: 0.9,
		density: 12,
	}
		this.x=x;
		this.y=y;
		this.width=50;
		this.height=70;
		this.body=Bodies.rectangle(this.x, this.y, 50,70, options)
		World.add(world, this.body);

	}
	display()
	{
			var stonepos=this.body.position;		
			var angle=this.body.angle;
			push()
			translate(stonepos.x, stonepos.y);
			rotate(angle)
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			rect(0,0, this.widght,this.height)
			pop()
	}

}