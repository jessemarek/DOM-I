const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//TASK 1 IMG SRCs
let headerImg = document.querySelector("#cta-img");
headerImg.src = siteContent["cta"]["img-src"];
let middleImg = document.querySelector("#middle-img");
middleImg.src = siteContent["main-content"]["middle-img-src"];

//TASK 2 FILLING IN THE HTML WITH THE JSON OBJECT

//Nav Links
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(function(item, index){
  item.textContent = siteContent["nav"][`nav-item-${index}`];
});

//CTA text
const ctaText = document.querySelector(".cta-text h1").textContent = siteContent["cta"]["h1"];
const ctaBtn = document.querySelector(".cta-text button").textContent = siteContent["cta"]["button"];

//Main Content

//Top Content
const topContent = document.querySelectorAll(".top-content .text-content");
let count = 0;

topContent.forEach(function(item){
  const content = Object.values(siteContent["main-content"])
  const h4 = item.querySelector("h4");
  const p = item.querySelector("p");

  h4.textContent = content[count++];
  p.textContent = content[count++];
});

//Increment past the middle img 
count++;

//Bottom Content
const botContent = document.querySelectorAll(".bottom-content .text-content");

botContent.forEach(function(item){
  const content = Object.values(siteContent["main-content"])
  const h4 = item.querySelector("h4");
  const p = item.querySelector("p");

  h4.textContent = content[count++];
  p.textContent = content[count++];
});