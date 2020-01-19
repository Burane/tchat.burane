function createMsg(place, user, content) {
    let area = document.getElementById('msgArea')
    let card = createCard()
    let cardBody = createCardBody()
    let pseudo = createPseudo(place,user)
    let message = createText(place, content)
    area.appendChild(card)
    card.appendChild(cardBody)
    cardBody.appendChild(pseudo)
    cardBody.appendChild(message)
}

function createCard() {
    let card = document.createElement('div')
    card.classList.add('card')
    return card
}

function createCardBody() {
    let cardBody = document.createElement('div')
    cardBody.classList.add('card-body')
    return cardBody
}

function createPseudo(place, user) {
    let pseudo = document.createElement('h6')
    pseudo.classList.add('card-subtitle', 'mb-2', 'text-muted', `text-${place}`)
    pseudo.textContent = user
    return pseudo
}

function createText(place, content) {
    let message = document.createElement('p')
    message.classList.add('card-text', `float-${place}`)
    message.textContent = content
    return message
}