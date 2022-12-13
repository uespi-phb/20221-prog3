window.onload = function () {
    const btn = document.getElementById('btn-add')
    btn.addEventListener('click', addSubject)
    // btn.onclick = addSubject
}

/*
<li>
  <span>Assunto #1</span>
  <button>&#10006;</button>
</li>
*/

function addSubject(event) {
    const text = document.getElementById('subject')

    const span = document.createElement('span')
    span.textContent = text.value

    const btn = document.createElement('button')
    btn.innerHTML = '&#10006;'
    btn.onclick = delSubject

    const item = document.createElement('li')
    item.appendChild(span)
    item.appendChild(btn)

    const list = document.getElementById('list-subject')
    list.appendChild(item)

    text.value = ''
}

function delSubject(event) {
    event.target.parentNode.remove()
}