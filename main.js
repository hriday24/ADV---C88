
// Create canvas variable
var canvas = new fabric.Canvas("myCanvas")

//Set initial positions for ball and hole images.
ball_x = 0;
ball_y = 0;
hole_x = 800;
hole_y = 400;


block_image_width = 5;
block_image_height = 5;

function load_img(){
	// write code to Upload golf image on the canvas
	fabric.Image.fromURL("goal.png", function(Img){
		hole = Img;
		hole.scaleToWidth(50);
		hole.scaleToHeight(50);
		hole.set({
			top: hole_y,
			left: hole_x
		})
		canvas.add(hole);
	})
	new_image();
}

function new_image()
{
	// write code to Upload ball image on canvas
	fabric.Image.fromURL("ball.png",function(Img){
		ball = Img;
		ball.scaleToWidth(50);
		ball.scaleToHeight(50);
		ball.set({
			top: ball_y,
			left: ball_x
		})
		canvas.add(ball);
	})
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);

		if(keyPressed == '38')
		{
			up();
			console.log("up");
			if((ball_x == hole_x) && (ball_y == hole_y)){
				canvas.remove(ball);
				document.getElementById("hd3").innerHTML = "You have hit the goal !!";
				document.getElementById("myCanvas").style.borderColor == "red";
			}
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
			if((ball_x == hole_x) && (ball_y == hole_y)){
				canvas.remove(ball);
				document.getElementById("hd3").innerHTML = "You have hit the goal !!";
				document.getElementById("myCanvas").style.borderColor == "red";
			}
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
			if((ball_x == hole_x) && (ball_y == hole_y)){
				canvas.remove(ball);
				document.getElementById("hd3").innerHTML = "You have hit the goal !!";
				document.getElementById("myCanvas").style.borderColor = "red";
			}
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
			if((ball_x == hole_x) && (ball_y == hole_y)){
				canvas.remove(ball);
				document.getElementById("hd3").innerHTML = "You have hit the goal !!";
				document.getElementById("myCanvas").style.borderColor == "red";
			}
		}
	}
	
	function up()
	{
		// Write a code to move ball upward.
		if(ball_y >= 50){
			ball_y = ball_y - 50;
			canvas.remove(ball);
			new_image();
		}
	}

	function down()
	{
		 // Write a code to move ball downward.
		 if(ball_y <= 400){
			 ball_y = ball_y + 50;
			 canvas.remove(ball);
			 new_image();
		 }
	}

	function left()
	{
		if(ball_x >= 50)
		{
			// Write a code to move ball left side.
			ball_x = ball_x - 50;
			canvas.remove(ball);
			new_image();
		}
	}

	function right()
	{
		if(ball_x <= 1000)
		{
			// Write a code to move ball right side.
			ball_x = ball_x + 50;
			canvas.remove(ball);
			new_image();
		}
	}

