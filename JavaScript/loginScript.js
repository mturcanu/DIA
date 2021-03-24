var close = document.getElementsByClassName("closebtn");
var i;

for (i = 0; i < close.length; i++) {
    close[i].onclick = function(){
    	console.log(i);
        var div = this.parentElement;
        div.style.opacity = "0";
    }
}

function login_approve(){
	console.log("hm");
	var div = close[0].parentElement;
    div.style.opacity = "1";
    div = close[1].parentElement;
    div.style.opacity = "1";
}