const allButtons = document.querySelectorAll('.ago-nav-button')
const allPanels = document.querySelectorAll('.ago-nav-panel')
const allProcessButtons = document.querySelectorAll('.ago-process-button')
const activeStyles = ['bg-primary-100']


function menuClick(id) {
    const clickedButton = document.getElementById(id);
    allButtons.forEach(value => value.classList.remove(activeStyles))
    clickedButton.classList.add(activeStyles)
    hide()
    show(id)
}

function hide() {
    allPanels.forEach(value => value.style.display = "none")
    allProcessButtons.forEach(value => value.style.display = "none")
}

function show(id) {
    const panel = document.getElementById(`${id}-settings`);
    const button = document.getElementById(`${id}-button`);
    console.log(panel)
    if (!!panel) {
        panel.style.display = "block";
    }
    if (!!button) {
        button.style.display = "block";
    }
    console.log(panel)

}

menuClick('pointOperations')
