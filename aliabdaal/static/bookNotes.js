console.log("This is bookNotes.js");

bookDrop
bookArticleDropdown
entireBookContent

bookDrop.addEventListener("mouseover", ()=>{
    bookArticleDropdown.style.display = "block";
    entireBookContent.style.position = "relative";
    entireBookContent.style.bottom = "200px"
})

bookArticleDropdown.addEventListener("mouseleave", ()=>{
    entireBookContent.style.zIndex = "-1";
    bookArticleDropdown.style.display = "none";
    entireBookContent.style.position = "relative";
    entireBookContent.style.bottom = "0px";
})