const canvas = document.querySelector("#canvas"),
	gd = canvas.getContext('2d'),
	WIDTH = screen.availWidth,
	HEIGHT = screen.availHeight;

canvas.width = WIDTH;
canvas.height = HEIGHT;

var ball = {
		x : 0,
		y : 0,
		r : Math.sqrt( WIDTH * HEIGHT ) / 450,
		vx : 0,
		vy : 0
	},
	mouse = {
		x : undefined,
		y : undefined
	},
	balls = [],
	timer = null;

for( let i = 0 ; i < 200 ; i ++ ){
	ball.x = getRandom( ball.r, WIDTH - ball.r );
	ball.y = getRandom( ball.r, HEIGHT - ball.r );
	ball.vx = getRandomVector( -Math.sqrt( WIDTH * HEIGHT ) / 300, Math.sqrt( WIDTH * HEIGHT ) / 300 );
	ball.vy = getRandomVector( -Math.sqrt( WIDTH * HEIGHT ) / 300, Math.sqrt( WIDTH * HEIGHT ) / 300 );
	balls.push( { ... ball } )
}

function draw(){
	gd.clearRect( 0, 0, canvas.width, canvas.height );
	for( item of balls ){
		gd.beginPath();
		gd.fillStyle = 'rgb( 67, 86, 33 )';
		gd.arc( item.x, item.y, item.r, 0, Math.PI * 2 );
		gd.fill();
		for( item2 of balls ){
			if( getLength( item, item2 ) < Math.floor( Math.sqrt( WIDTH * HEIGHT ) / 10 ) ){
				drawLine( item, item2, Math.sqrt( WIDTH * HEIGHT ) / 50 / getLength( item, item2 ) );
			}
		}
		if( getLength( item, mouse ) < Math.floor( Math.sqrt( WIDTH * HEIGHT ) / 5 ) ){
			drawLine( item, mouse, Math.sqrt( WIDTH * HEIGHT ) / 10 / getLength( item, mouse ) );
		}
	}
}

function update(){
	for( item of balls ){
		item.x += item.vx;
		item.y += item.vy;
		item.vx = ( item.x < item.r ) || ( item.x > WIDTH - item.r ) ? -item.vx : item.vx;
		item.vy = ( item.y < item.r ) || ( item.y > WIDTH - item.r ) ? -item.vy : item.vy;
	}
}

function getRandom( min, max ){
	return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
}

function getRandomVector( min, max ){
	const num = ( getRandom( min, max ) ) * ( Math.random() / 2 - Math.random() );
	return num == 0 ? getRandomVector( min, max ) : num;
}

function getLength( obj1, obj2 ){
	return Math.sqrt( ( obj2.x - obj1.x ) * ( obj2.x - obj1.x ) + ( obj2.y - obj1.y ) * ( obj2.y - obj1.y ) );
}

function drawLine( obj1, obj2, width ){
	gd.beginPath();
	gd.strokeStyle = "rgb( 67, 86, 33 )";
	gd.lineWidth = width;
	gd.moveTo( obj1.x, obj1.y );
	gd.lineTo( obj2.x, obj2.y );
	gd.stroke();
}

window.onload = function(){
	clearInterval( timer );
	timer = setInterval( function(){
		draw();
		update();
	}, 10 );
}

canvas.onmousemove = function( e ){
	mouse.x = e.pageX;
	mouse.y = e.pageY;
}