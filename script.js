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
    bigBox.classList.add("active"); 
    setTimeout(() => {
        bigBox.classList.add("fade-in"); 
    }, 10);

    window.scrollTo(0,0);
}

function closeBigBox(type) {
    let bigBox = document.getElementById( type + "bigbox");
    bigBox.classList.remove("fade-in"); 

    setTimeout(() => {
        bigBox.classList.remove("active"); 
    }, 500);

    setTimeout(() => {
        if (type === "elektrik") {
            window.scrollTo({ top: 1200, behavior: "smooth" });
        } else if (type === "avatar") {
            window.scrollTo({ top: 1700, behavior: "smooth" });
        }
    }, 100);
  

}

  function toggleBox(button) {
    const targetId = button.getAttribute('data-target');
    const targetBox = document.getElementById(targetId);
    const showMoreBtn = document.querySelector(`[data-target="${targetId}"]`);

    const isHidden = targetBox.classList.contains("hidden");

    if (isHidden) {
      targetBox.classList.remove("hidden");
      showMoreBtn.style.display = "none";

    const yOffset = -100;
    const y = targetBox.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });


    } else {
      targetBox.classList.add("hidden");
      showMoreBtn.style.display = "flex";
    }
    

  }

const hamburger = document.querySelector(".hamburger");
const offScreenMenu = document.querySelector(".off-screen-menu");

hamburger.addEventListener("click", () => {
   hamburger.classList.toggle("active");
   offScreenMenu.classList.toggle("active");
})

document.getElementById("scroll-box").addEventListener("click", function(){
    document.querySelector(".services").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});

document.getElementById("scroll-box1").addEventListener("click", function() {
    document.querySelector(".title-box").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});
  


 document.getElementById("scroll-box2").addEventListener("click", function() {
  document.querySelector(".title-box2").scrollIntoView({
    behavior: "smooth",
    block: "start"  
  });
});

  document.getElementById("scroll-box3").addEventListener("click", function() {
  document.querySelector(".about-me").scrollIntoView({
    behavior: "smooth",
    block: "start" 
  });
});

      document.getElementById("scroll-box4").addEventListener("click", function() {
  document.querySelector(".footer").scrollIntoView({
    behavior: "smooth",
    block: "start"  
  });
});
                          
   
let tl = gsap.timeline();

  tl.from(".feature-box", { 
     y: -700,              
    duration: 1,         
    ease: "expo.out",  
    repeat: 0, 
  })

 
  .from(".feature-box1", { 
    y: -800,             
    duration: 1,         
    ease: "expo.out", 
    repeat: 0, 
  })


  .from(".feature-box2", { 
      y: -900,              
    duration: 1,         
    ease: "expo.out",  
    repeat: 0,
  });


  
   let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".title-box",
        start: "top +100px",

    }
   });

  tl2.from(".elektrik h3", { 
     opacity: 0,              
    duration: 1,         
  })

 
  tl2.from(".elektrik p", { 
    opacity: 0,             
    duration: 1,         
  })

 
  .from(".elektrik .small-button", { 
      opacity: 0,              
    duration: 1,         
  });


 
          
              
          
      




