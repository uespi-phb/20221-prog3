
function showMessage(msg) {
    const box = document.getElementById('message-box')
    box.innerText = msg
    box.style.visibility = 'visible'
}

function hideMessage() {
    const box = document.getElementById('message-box')
    box.style.visibility = 'hidden'
}

function btnShowClick() {
    const btn = document.getElementById('btn-show')

    if(btn.value == 'Exibir') {
        const msg = window.prompt('Digite uma mensagem')
        showMessage(msg)
        btn.value = 'Ocultar'
    } else {
        hideMessage()
        btn.value = 'Exibir'
    }
}
