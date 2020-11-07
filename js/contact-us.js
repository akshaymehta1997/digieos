document.querySelector(".hamburger").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("open");
  document.querySelectorAll(".nav-links li").forEach(link => {
      link.classList.toggle("fade");
  });
});

let btn =document.getElementsByTagName("button");
let line=document.querySelector("#line");
function toggleclass() {
    let stringAdd = "";
    let stringRemove = "";
    if (window.matchMedia("(max-width: 600px)").matches) {  
      stringAdd="btn-sm";
      stringRemove="btn-lg"
      line.innerHTML=`<div></div><div class="slogan-line"></div>`
    }
    else if (window.matchMedia("(max-width: 992px)").matches) {  
      stringAdd="";
      stringRemove="btn-lg"
      line.innerHTML=`<div></div><div class="slogan-line"></div>`
    }    
    else {      
      stringAdd="btn-lg";
      stringRemove="btn-sm"
      line.innerHTML=``
    }
    for (let index = 0; index < 2; index++) {
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

window.addEventListener('resize', toggleclass);