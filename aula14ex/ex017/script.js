function tabuada() {
    let num = document.querySelector('#txtn')
    let tab = document.querySelector('#seltab')

    if (num.value.length != 0) {
        let n = Number(num.value)

        tab.innerHTML = ''

        cont = 1
        while (cont <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${cont} = ${n * cont}`
            item.value = `tab${cont}`
            tab.appendChild(item)

            cont++
        }
    } else {
        alert('Por favor, digite um número!')        
    }
} 