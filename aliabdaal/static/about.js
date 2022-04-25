console.log("This is about.js");

let aboutDrop = document.getElementById("aboutDrop");
let aboutArticleDropdown = document.getElementById("aboutArticleDropdown");
let aboutEntireContainer = document.getElementById("aboutEntireContainer");

aboutDrop.addEventListener("mouseover", ()=>{
    aboutArticleDropdown.style.display = "block";
    aboutEntireContainer.style.position = "relative";
    aboutEntireContainer.style.bottom = "200px"
})

aboutArticleDropdown.addEventListener("mouseleave", ()=>{
    aboutEntireContainer.style.zIndex = "-1";
    aboutArticleDropdown.style.display = "none";
    aboutEntireContainer.style.position = "relative";
    aboutEntireContainer.style.bottom = "0px";
})