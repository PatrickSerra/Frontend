let openModalbutton = document.getElementById("modal-btn-open")
let closeModalButton = document.getElementById("modal-btn-close");
let modal = document.getElementById('modal')

openModalbutton.addEventListener('click', function(event) {
    event.preventDefault();
    modal.style.display = "block"
});

closeModalButton.addEventListener('click', function(event) {
    event.preventDefault();
    modal.style.display = 'none';
    openModalbutton.focus();
})

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        modal.style.display = 'none';
        openModalButton.focus();
    }
});