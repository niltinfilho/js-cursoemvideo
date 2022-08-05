function contar() {
    let ini = document.querySelector('#txti');
    let i = Number(ini.value)

    let fim = document.querySelector('#txtf');
    let f = Number(fim.value)

    let passo = document.querySelector('#txtp');
    let p = Number(passo.value)

    if (p <= 0) {
        p = 1
        alert('Passo inválido! Considerando passo 1')
    }

    let res = document.querySelector('#res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!'

    } else {
        res.innerHTML = 'Contando: <br>'

        if (i < f) {
            
            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }

        } else {
            
            for (c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }

        res.innerHTML += `\u{1F3C1}`
    }
}