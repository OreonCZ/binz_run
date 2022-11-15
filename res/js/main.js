
const mc = document.getElementById("mc");
const error = document.getElementById("error");
const counter = document.getElementById("counter");

let counts=setInterval(updated);
        let upto=0;
        function updated(){
            let count= document.getElementById("counter");
            count.innerHTML=++upto;
            if(upto===Infinity)
            {
                clearInterval(counts);
            }
        }

function jump(){
    if (mc.classList !="jump") {
    mc.classList.add("jump");

  setTimeout(function (){
    mc.classList.remove("jump");
     }, 300);
  }
}

document.addEventListener("keydown", function(event){
  jump()
});

let alive = setInterval(function (){
    let mcTop = parseInt(window.getComputedStyle(mc).getPropertyValue("top"));

    let errorLeft = parseInt(window.getComputedStyle(error).getPropertyValue("left"));

    if(errorLeft < 30 && errorLeft > -20 && mcTop >=305){
      error.style.animation = "none";
      error.style.display = "none";
      alert("So bad XDDDDDDDDD");
      counter.style.display ="none";
    }
}, 10);


