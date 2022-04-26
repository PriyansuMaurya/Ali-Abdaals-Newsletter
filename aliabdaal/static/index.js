console.log("This is index.js");

let drop = document.getElementById("drop");
let articleDropdown = document.getElementById("articleDropdown");
let indexContainer = document.getElementById("indexContainer");

drop.addEventListener("mouseover", ()=>{
    articleDropdown.style.display = "block";
    articleDropdown.style.zIndex = "+1";
    indexContainer.style.position = "relative";
    indexContainer.style.bottom = "200px"
})

articleDropdown.addEventListener("mouseleave", ()=>{
    articleDropdown.style.display = "none";
    indexContainer.style.position = "relative";
    indexContainer.style.bottom = "0px";
})