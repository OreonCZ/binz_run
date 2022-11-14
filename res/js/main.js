
const mc = document.getElementById("mc");
const error = document.getElementById("error");

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
      alert("So bad XDDDDDDDDDD")
    }
}, 10);
