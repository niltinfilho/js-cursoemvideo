function carregar() {
    var msg = document.querySelector('#msg')
    var img = document.querySelector('#imagem')

    var data = new Date()
    // var hora = data.getHours()
    var hora = 7

    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 6 && hora < 12) {
         // bom dia
         img.src = 'foto-manha.png'
         document.body.style.background = '#E7DBC2'

    } else if (hora >= 12 && hora < 18) {
        // boa tarde
        img.src = 'foto-tarde.png'
        document.body.style.background = '#B9846F'
    } else {
        // boa noite
        img.src = 'foto-noite.png'
        document.body.style.background = '#113C55'
    }
}