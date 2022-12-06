
function showMessage(msg) {
    const box = document.getElementById('message-box')
    box.textContent = msg
}

function btnShowClick() {
    const msg = window.prompt('Digite uma mensagem')

    const box = document.getElementById('message-box')
    box.textContent = msg 
    box.style.visibility = 'visible' 
}

function btnHideClick(event) {
    const box = document.getElementById('message-box')
    box.style.visibility = 'hidden' 
}
