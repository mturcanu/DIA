window.onscroll = function() {scrollFunction()};
window.onresize = function() {
    var BMC = document.getElementsByClassName("BurgerMenuClick")[0];

    if(window.innerWidth >= 768 && BMC.style.display == "block"){
        BMC.style.display = "none";
        var x = document.getElementsByClassName("container")[0];
        x.classList.toggle("change");
    };
};
var i = 0;

setInterval(changeColor, 7000);

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    	console.log("lol");
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

function changeColor(){
    i = Math.random()*500;
    document.getElementById("headerr").style.backgroundColor= "hsl("+i+", 50%, 50%)";

}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    scrollToTop(40);
}

function scrollToTop(scrollDuration) {
const   scrollHeight = window.scrollY,
        scrollStep = Math.PI / ( scrollDuration / 15 ),
        cosParameter = scrollHeight / 2;
var     scrollCount = 0,
        scrollMargin,
        scrollInterval = setInterval( function() {
            if ( window.scrollY != 0 ) {
                scrollCount = scrollCount + 1;  
                scrollMargin = cosParameter - cosParameter * Math.cos( scrollCount * scrollStep );
                window.scrollTo( 0, ( scrollHeight - scrollMargin ) );
            } 
            else clearInterval(scrollInterval); 
        }, 15 );
}

function burgerMenu(x) {
  x.classList.toggle("change");
  var BMC = document.getElementsByClassName("BurgerMenuClick")[0];
  console.log(BMC.style.display);
  if (BMC.style.display == "none" || !BMC.style.display)
    BMC.style.display = "block";
else
    BMC.style.display = "none";
}