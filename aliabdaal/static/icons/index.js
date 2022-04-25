console.log("This is index.js");

//article drop down menu
let drop = document.getElementById("drop");
let articleDropdown = document.getElementById("articleDropdown");
let container = document.getElementById("container");
drop.addEventListener("mouseover", ()=>{

    if(articleDropdown.style.display == "none"){
        articleDropdown.style.display = "block";
        container.style.marginTop = "-8.5rem";
    }
})

drop.addEventListener("mouseout", ()=>{
    articleDropdown.style.display = "none";
    container.style.marginTop = "5.5rem";
})

//content popup functionality
let content1 = document.getElementById("content_1");
let headContent1 = document.getElementById("headContent1");
let content2 = document.getElementById("content_2");
let headContent2 = document.getElementById("headContent2");
let content3 = document.getElementById("content_3");
let headContent3 = document.getElementById("headContent3");

content1.addEventListener("mouseover", ()=>{
    headContent1.style.color = "#666";
    content1.style.position = "relative";
    content1.style.bottom = "5px";
    content1.style.cursor = "pointer";
})

content1.addEventListener("mouseleave", ()=>{
    headContent1.style.color = "black";
    content1.style.position = "relative";
    content1.style.bottom = "0px";
})

content2.addEventListener("mouseover", ()=>{
    headContent2.style.color = "#666";
    content2.style.position = "relative";
    content2.style.bottom = "5px";
    content2.style.cursor = "pointer";
})

content2.addEventListener("mouseleave", ()=>{
    headContent2.style.color = "black";
    content2.style.position = "relative";
    content2.style.bottom = "0px";
})

content3.addEventListener("mouseover", ()=>{
    headContent3.style.color = "#666";
    content3.style.position = "relative";
    content3.style.bottom = "5px";
    content3.style.cursor = "pointer";
})

content3.addEventListener("mouseleave", ()=>{
    headContent3.style.color = "black";
    content3.style.position = "relative";
    content3.style.bottom = "0px";
})


//explore
let explore1 = document.getElementById("explore1");
let explore2 = document.getElementById("explore2");
let explore3 = document.getElementById("explore3");

let subexp1_2 = document.getElementById("subexp1_2");
let subexp2_2 = document.getElementById("subexp2_2");
let subexp3_2 = document.getElementById("subexp3_2");

explore1.addEventListener("mouseover", ()=>{
    subexp1_2.style.color = "#666";
})

explore1.addEventListener("mouseleave", ()=>{
    subexp1_2.style.color = "black";
})

explore2.addEventListener("mouseover", ()=>{
    subexp2_2.style.color = "#666";
})

explore2.addEventListener("mouseleave", ()=>{
    subexp2_2.style.color = "black";
})

explore3.addEventListener("mouseover", ()=>{
    subexp3_2.style.color = "#666";
})

explore3.addEventListener("mouseleave", ()=>{
    subexp3_2.style.color = "black";
})