var fish = document.getElementById("fish");
var net = document.getElementById("net");
var counter = 0;

function jump(){
    if(fish.classList.contains("animate")){ return }
    fish.classList.add("animate");
    setTimeout(function(){
        fish.classList.remove("animate");
    }, 300);
}

var checkDead = setInterval(function() {
    let fishTop = parseInt(window.getComputedStyle(fish).getPropertyValue("top"));
    let netLeft = parseInt(window.getComputedStyle(net).getPropertyValue("left"));
    if(netLeft < 20 && netLeft > -20 && fishTop >= 130){
        net.style.animation = "none";
        alert("Game Over. Score: " + Math.floor(counter / 100));
        counter = 0;
        net.style.animation = "net 1s infinite linear";
    } else {
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter / 100);
    }
}, 10);
