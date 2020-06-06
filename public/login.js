Node.prototype.html = function( content ){
	if( !content ) return this.innerHTML;
	return this.innerHTML = content;
}

const data = {
	name: "李宏锋"
}

document.querySelector("#login").onclick = function(){

	var name = document.querySelector("#name").value;
	var message = document.querySelector("#message");

	if( !name ){
		message.html("信息未填写!");
	}else if( name != data.name ){
		message.html("姓名错误!");
	}

	if( name == data.name ){
		message.html("进入成功!");
		setTimeout( function(){
			window.open( "./static/Birthday.html", target="_self" );
		}, 750 );
	}

}