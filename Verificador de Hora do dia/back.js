function carregar() {
    var msg = document.getElementById('msg')
    var saudacao = document.getElementById('saudacao')
    var img = document.getElementById('imagem')
    var data = new Date() // Pega a data no usuario
    var hora = data.getHours() // Pega a hora exata 
    msg.innerHTML = `agora são ${hora} horas.`

    // verifica a hora do dia e dependendo do horario muda a imagem e o fundo
    if (hora >= 0 && hora < 12) {
        saudacao.innerHTML = '<strong>Bom dia!!</strong>'
        img.src = 'imagemmanha.png'
        document.body.style.background = '#f6efc2'
    } else if (hora >= 12 && hora <= 18) {
        saudacao.innerHTML = `<strong>Boa tarde!!</strong>`
        img.src = 'imagemtarde.png'
        document.body.style.background = '#c9652c'
    } else {
        saudacao.innerHTML = '<strong>Boa noite!!</strong>'
        img.src = 'imagemnoite.png'
        document.body.style.background = '#6c6797'
    }
}
