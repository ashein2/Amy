Template.draw.events({
	"click #drawIt": function(event){
		// drawStuff();
		drawTriangle();
		window.requestAnimationFrame(drawStuff);
	}
})

function drawStuff(){
	var time = new Date();
	var seconds = time.getSeconds()* 1000 + time.getMilliseconds();
	var drawContext = drawSpace.getContext("2d");
	var my_gradient = drawContext.createLinearGradient(0,0,600,0);
	my_gradient.addColorStop(0, "green");
	my_gradient.addColorStop(1, "purple");
	drawContext.fillStyle = my_gradient;
	// drawContext.fillStyle = "yellow";
	

	drawContext.fillRect(0, 0,600,300);
	drawContext.save();
	drawContext.translate(300,150);
	drawContext.rotate(0.01*seconds/360*(2*Math.PI));
	drawContext.translate(-300,-150);
	drawContext.fillStyle = "blue";
	drawContext.fillRect(50,50,500,200);
	drawContext.restore();
	window.requestAnimationFrame(drawStuff);

	drawContext.fillStyle = "yellow";
	drawContext.fillRect(300,150,10,10);
}

Template.draw.rendered = drawStuff;

function drawTriangle(){
	var drawContext = drawSpace.getContext("2d");
	drawContext.strokeStyle = "white";
	drawContext.moveTo(100,100);
	drawContext.lineTo(150,100);
	drawContext.lineTo(125,150);
	drawContext.lineTo(100,100);
	drawContext.stroke();

}