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

// toggling pop window for packages
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
