const menuButton = document.querySelector(".bars");
const overlay = document.querySelector(".overlay");
const logoIcon = document.querySelector(".logo--icon");
const questionCard = document.querySelectorAll(".question__card");
const questionCardBtn = document.querySelectorAll(".question__card--btn");
const featuresDisplay = document.querySelectorAll(".features__display");
const featureLinks = document.querySelector(".features__link");
const featuresBtn = [...featureLinks.children];
const body = document.querySelector("body")


window.addEventListener("resize", ()=>{
  featuresDisplay.forEach((feature) => {
    if(feature.classList.contains('active')){
      feature.style.display = window.innerWidth<1024?"inline-block":"flex";
    }
  })
})

featuresBtn.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    if (featuresDisplay[index].classList.contains("active")) {
      return;
    } else {
      featuresDisplay.forEach((feature, fId) => {
        if (fId !== index) {
          feature.classList.remove("active");
          feature.style.display = "none";
        }
      });
      
      featuresDisplay[index].classList.add("active")
      if(window.innerWidth<1024){
        featuresDisplay[index].style.display = "inline-block";
      }
      else{
        featuresDisplay[index].style.display = "flex";
      }
      
    }
  });
});

questionCardBtn.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    // Tap the Current Card
    let currentCard = questionCard[index];
    let cardBody = currentCard.children[1];

    // Open FAQ Answer
    if (btn.classList.contains("arrow-btn")) {
      btn.classList.remove("arrow-btn");
      btn.classList.add("close-btn");
      cardBody.style.display = "inline-block";
    }
    // Close FAQ Answer
    else {
      btn.classList.remove("close-btn");
      btn.classList.add("arrow-btn");
      cardBody.style.display = "none";
    }
  });
});

menuButton.addEventListener("click", () => {
  console.log(menuButton);
  // Nav Close
  if (menuButton.classList.contains("close")) {
    menuButton.classList.remove("close");
    overlay.classList.remove("fade-in");
    overlay.classList.add("has-fade");
    body.classList.remove("no-scroll")
    logoIcon.style.backgroundImage = "url('../images/logo-bookmark.svg')";
  }

  // Nav Open
  else {
    menuButton.classList.add("close");
    overlay.classList.remove("has-fade");
    overlay.classList.add("fade-in");
    body.classList.add("no-scroll")

    logoIcon.style.backgroundImage = "url('../images/logo-bookmark-white.svg')";
  }
});
