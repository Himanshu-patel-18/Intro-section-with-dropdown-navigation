let featuresLinks = document.querySelector("#Features");
let toggle = document.querySelector(".toggle");
let companyLinks = document.querySelector("#company");
let toggle2 = document.querySelector(".toggle-2");
let featuresSrc = document.querySelector("#Features img");
let companySrc = document.querySelector("#company img");

let menu = document.querySelector(".menu");
let sideNav = document.querySelector(".side-nav");
let cross = document.querySelector(".cross");


let features1 = document.querySelector("#Features-1");
let company1 = document.querySelector("#company-1");
let sideToggle = document.querySelector(".side-toggle");
let sideToggle2 = document.querySelector(".side-toggle-2");
let featuresSrc1 = document.querySelector("#Features-1 img");
let companySrc1 = document.querySelector("#company-1 img");

features1.addEventListener("click", function() {
  if (sideToggle.style.display === "block") {
    sideToggle.style.display = "none";
    featuresSrc1.src = "./images/icon-arrow-down.svg";
  } else {
    sideToggle.style.display = "block";
    featuresSrc1.src = "./images/icon-arrow-up.svg";
  }
})

company1.addEventListener("click", function() {
  if (sideToggle2.style.display === "block") {
    sideToggle2.style.display = "none";
    companySrc1.src = "./images/icon-arrow-down.svg";
  } else {
    sideToggle2.style.display = "block";
    companySrc1.src = "./images/icon-arrow-up.svg";
  }
})
menu.addEventListener("click", function() {
  if (sideNav.style.display === "block") {
    sideNav.style.display = "none";
    sideNav.style.transform = "translateX(-100%)";
  } else {
    sideNav.style.display = "block";
    sideNav.style.transform = "translateX(0)";
  }
});

cross.addEventListener("click", function() {
  sideNav.style.display = "none";
});


featuresLinks.addEventListener("click", function() {
  if (toggle.style.display === "block") {
    toggle.style.display = "none";
    featuresSrc.src = "./images/icon-arrow-down.svg";
  } else {
    toggle.style.display = "block";
    featuresSrc.src = "./images/icon-arrow-up.svg";
  }
});
companyLinks.addEventListener("click", function() {
  if (toggle2.style.display === "block") {
    toggle2.style.display = "none";
    companySrc.src = "./images/icon-arrow-down.svg";
  } else {
    toggle2.style.display = "block";
    companySrc.src = "./images/icon-arrow-up.svg";
  }
});
