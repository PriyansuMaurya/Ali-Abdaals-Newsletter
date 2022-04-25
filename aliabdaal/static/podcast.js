console.log("This is podcast.js");

let productDop = document.getElementById("productDop");
let productArticleDropdown = document.getElementById("productArticleDropdown");
let entireProductContainer = document.getElementById("entireProductContainer");

productDop.addEventListener("mouseover", ()=>{
    productArticleDropdown.style.display = "block";
    entireProductContainer.style.position = "relative";
    entireProductContainer.style.bottom = "200px"
})

productArticleDropdown.addEventListener("mouseleave", ()=>{
    entireProductContainer.style.zIndex = "-1";
    productArticleDropdown.style.display = "none";
    entireProductContainer.style.position = "relative";
    entireProductContainer.style.bottom = "0px";
})