console.log("This is courses.js");

let coursesDrop = document.getElementById("coursesDrop");
let coursesArticleDropdown = document.getElementById("coursesArticleDropdown");
let coursesEntireContent = document.getElementById("coursesEntireContent");

coursesDrop.addEventListener("mouseover", ()=>{
    coursesArticleDropdown.style.display = "block";
    coursesEntireContent.style.position = "relative";
    coursesEntireContent.style.bottom = "200px"
})

coursesArticleDropdown.addEventListener("mouseleave", ()=>{
    coursesEntireContent.style.zIndex = "-1";
    coursesArticleDropdown.style.display = "none";
    coursesEntireContent.style.position = "relative";
    coursesEntireContent.style.bottom = "0px";
})