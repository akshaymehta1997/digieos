document.querySelector(".hamburger").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("open");
  document.querySelectorAll(".nav-links li").forEach(link => {
      link.classList.toggle("fade");
  });
});

let btn =document.getElementsByTagName("button");
function toggleclass() {
    let stringAdd = "";
    let stringRemove = "";
    if (window.matchMedia("(max-width: 600px)").matches) {  
      stringAdd="btn-sm";
      stringRemove="btn-lg"
    }
    else if (window.matchMedia("(max-width: 1082px)").matches) {  
      stringAdd="";
      stringRemove="btn-lg"
    }    
    else {      
      stringAdd="btn-lg";
      stringRemove="btn-sm"
    }
    for (let index = 0; index < 4; index++) {
      if(stringAdd==""){
        btn[index].classList.remove("btn-sm");
      }
      else{
        btn[index].classList.add(stringAdd);
      }
      btn[index].classList.remove(stringRemove);
    } 
}

toggleclass();


window.addEventListener('resize', toggleclass)