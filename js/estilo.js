var tudo = document.querySelector(".tudo");
var btn = document.querySelector("button")

//console.log(btn);

function toggle(){
  if(btn.innerHTML == "Inscrever"){    
    tudo.style.marginLeft = "-90%";
    btn.innerHTML = "Login";
  }else{
    tudo.style.marginLeft = "4%";
    btn.innerHTML = "Inscrever";
  }
}
