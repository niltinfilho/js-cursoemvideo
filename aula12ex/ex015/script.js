function verificar() {
    var data = new Date()
    var ano = data.getFullYear()

    var fAno = document.querySelector('#txtano')
    
    var res = document.querySelector('#res')

    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fSex = document.getElementsByName('radsex')

        var idade = ano - Number(fAno.value)

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        var genero = ''
        if (fSex[0].checked) {
            genero = 'Homem'

            if (idade >= 0 && idade <= 10) {
                // crianca
                img.setAttribute('src', 'foto-crianca-m.png')
            } else if (idade < 23) {
                // jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade < 45) {
                // adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            } else {
                // idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        } else if (fSex[1].checked) {
            genero = 'Mulher'

            if (idade >= 0 && idade <= 10) {
                // crianca
                img.setAttribute('src', 'foto-crianca-f.png')
            } else if (idade < 23) {
                // jovem
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade < 45) {
                // adulto
                img.setAttribute('src', 'foto-adulto-f.png')
            } else {
                //idoso
                img.setAttribute('src', 'foto-idoso.png')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos um(a) ${genero} com ${idade} anos!`

        res.appendChild(img)
    }
}