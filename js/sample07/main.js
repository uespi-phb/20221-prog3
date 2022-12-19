window.onload = function() {
    document.forms['form-user'].onsubmit = validateForm
}

function validateForm(event) {
    const form = event.target
    let   valid = true
    let   error;

    console.log('validateForm()')

    if(form.user.value === '') {
        error = 'Defina o nome do usuário'
        valid = false
    }
    else 
        error = ''
    form.user.nextElementSibling.textContent = error

    if(form.passwd.value === '') {
        error = 'Senha inválida'
        valid = false
    } 
    else 
        error = ''
    form.passwd.nextElementSibling.textContent = error

    if(form.email.value === '') {
        error = 'E-mail inválido'
        valid = false
    }
    else
        error = ''
    form.email.nextElementSibling.textContent = error

    if(!valid) {
        event.preventDefault()
    }
}