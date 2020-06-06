var buttonTrue = document.querySelector("#true"),
	buttonFalse = document.querySelector("#false"),
	gift = document.querySelector("#gift"),
	container = document.querySelector("#gifts"),
	gifts = ["泡泡币一张", "铅笔一支", "答案一次", "铅笔一支", "铅笔二支", "答案一次"];

gift.style.fontSize = `${innerWidth / 20}px`;
container.style.fontSize = `${innerWidth / 20}px`;

buttonTrue.onclick = function(){
	gift.style.opacity = "1";
	gift.style.transform = "scale(1)";
	container.style.opacity = "1";
	container.style.transform = "scale(1)";
	setTimeout( random, 1000 );
}

buttonFalse.onclick = function(){
	alert("选不好也没用你只能选行!");
}

function random(){
	var timer = setInterval( function(){
		container.innerHTML = gifts[ Math.floor( Math.random() * gifts.length ) ];
	}, 10 );
	setTimeout( function(){
		clearInterval( timer );
	}, 1000 );
}