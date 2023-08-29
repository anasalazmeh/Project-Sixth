const menu=document.getElementById("menn");
const action=document.getElementById("menn1");


menu.addEventListener('click', () => {
    hand();
  });

function hand(){
  
    menu.classList.toggle("is-active");
    action.classList.toggle("is-active");

}


