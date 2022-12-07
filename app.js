// navigation bar toggling

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

// var scroll = new SmoothScroll('a[href*="#"]', {
//  speed: 2000,
//  speedAsDuration: true
// });
// const options = {
//       speed: 1000,
//       speedAsDuration: true,
//       offset: window.innerWidth < 768 ? 400 : 90
//   }
//   new SmoothScroll('a[href*="#"]', options);

//toggling pop window for packages
pop_btn = document.querySelector(".button");
function togglepopup(){

pop_btn.classList.add("popup");
this.innerHTML = ""
        document.getElementById("popup-1").classList.toggle("active");
}

function togglepopup2(){
      document.getElementById("popup-2").classList.toggle("active");
}

function togglepopup3(){
      document.getElementById("popup-3").classList.toggle("active");
}


function togglepopup4(){
      document.getElementById("service-pop").classList.toggle("active");
}




function opened(){
      document.getElementById("service-pop1").classList.add("active");
      
}
function closed(){
      document.getElementById("service-pop1").classList.remove("active");
      
      
}
function service_opened(){
      document.getElementById("service-pop2").classList.add("active");
    
}
function service_closed(){
      document.getElementById("service-pop2").classList.remove("active");
     
}
function service__opened(){
      document.getElementById("service-pop3").classList.add("active");
     

}
function service__closed(){
      document.getElementById("service-pop3").classList.remove("active");
     
      
}
const showImage = () => {
      document.getElementById("first").style.display ='block';
  }