let currentSlide = 0;
const slides = document.querySelectorAll(".slide-content");
const navBoxes = document.querySelectorAll(".nav-box");

function changeSlide(index) {
    slides[currentSlide].classList.remove("active");
    navBoxes[currentSlide].classList.remove("disabled");

    slides[index].classList.add("active");
    navBoxes[index].classList.add("disabled");

    currentSlide = index;
}

function openBigBox(type) {
    let bigBox = document.getElementById( type + "bigbox");
    bigBox.classList.add("active"); // Show the box
    setTimeout(() => {
        bigBox.classList.add("fade-in"); // Smooth fade-in
    }, 10);

    window.scrollTo(0,0);
}

function closeBigBox(type) {
    let bigBox = document.getElementById( type + "bigbox");
    bigBox.classList.remove("fade-in"); // Start fade-out

    setTimeout(() => {
        bigBox.classList.remove("active"); // Hide after transition
    }, 500);

    setTimeout(() => {
        if (type === "elektrik") {
            window.scrollTo({ top: 1200, behavior: "smooth" });
        } else if (type === "avatar") {
            window.scrollTo({ top: 1700, behavior: "smooth" });
        }
    }, 100);
  

}

const hamburger = document.querySelector(".hamburger");
const offScreenMenu = document.querySelector(".off-screen-menu");

hamburger.addEventListener("click", () => {
   hamburger.classList.toggle("active");
   offScreenMenu.classList.toggle("active");
})

document.getElementById("scroll-box").addEventListener("click", function() {
    window.scrollTo({
        top: 550,  
        behavior: "smooth"
      });
    });
  
document.getElementById("scroll-box1").addEventListener("click", function() {
    window.scrollTo({
    top: 1150,  
    behavior: "smooth"
    });
    });

    document.getElementById("scroll-box2").addEventListener("click", function() {
    window.scrollTo({
        top: 2250,  
        behavior: "smooth"
        });
        });

    document.getElementById("scroll-box3").addEventListener("click", function() {
    window.scrollTo({
        top: 2950,  
        behavior: "smooth"
        });
        });

        document.getElementById("scroll-box4").addEventListener("click", function() {
            window.scrollTo({
                top: 3350,  
                behavior: "smooth"
                });
                });
                          
                     
                  
              
          
              
          
      




