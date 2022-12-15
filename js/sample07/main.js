window.onload = function() {
    document.forms['form-user'].onsubmit = validateForm
}

function validateForm(event) {
    const form = event.target
    let   valid = true

    if(form.user.value === '') {
        form.user.nextElementSibling.textContent = 'Defina o nome do usuário'
        valid = false
    }
    if(form.passwd.value === '') {
        form.passwd.nextElementSibling.textContent = 'Senha inválida'
        valid = false
    }
    if(form.email.value === '') {
        form.email.nextElementSibling.textContent = 'E-mail inválido'
        valid = false
    }

    if(!valid) {
        event.preventDefault()
    }

    console.log('validateForm()')
}