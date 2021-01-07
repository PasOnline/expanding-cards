const panels = document.querySelectorAll('.panel');


//Add the active class
panels.forEach((panel) => {
    panel.addEventListener("click", () => {
        removeActiveClasess();
        panel.classList.add("active");
    });
});

//Remove the active class
function removeActiveClasess(){
    panels.forEach((panel) => {
        panel.classList.remove('active');
    });
}