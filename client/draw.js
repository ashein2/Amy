Template.draw.events({
	"click #drawIt": function(event){
		// drawStuff();
		drawTriangle();
	}
})

function drawStuff(){
	var drawContext = drawSpace.getContext("2d");
	var my_gradient = drawContext.createLinearGradient(0,0,600,0);
	my_gradient.addColorStop(0, "green");
	my_gradient.addColorStop(1, "purple");
	drawContext.fillStyle = my_gradient;
	
	drawContext.fillStyle = "yellow";
	drawContext.fillRect(0,0,600,300);
	drawContext.fillStyle = "blue";
	drawContext.fillRect(50,50,500,200);
	drawContext.fillStyle = "purple";
	drawContext.fillRect(295,145,100,100);
}

Template.draw.rendered = drawStuff;

function drawTriangle(){
	drawContext.strokeStyle = "green";
	drawContext.moveTo(100,100);
	drawContext.lineTo(150,100);
	drawContext.lineTo(125,150);
	drawContext.lineTo(100,100);
	drawContext.stroke();

}