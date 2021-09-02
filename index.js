const collapsible = document.querySelector(".collapsible");
const collapsibleContent = document.querySelector(".collapsible-content");

collapsible.addEventListener("click", function () {
    collapsibleContent.classList.toggle("visible");
});
