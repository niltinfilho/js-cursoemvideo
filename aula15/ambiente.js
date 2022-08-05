let num = [5, 8, 2, 9, 3]
console.log(`Nosso array é o ${num}`)
console.log(`O vetor tem ${num.length} elementos`)
console.log(num[1]) // A contagem começa sempre pelo: 0 -> 1 -> 2 -> 3 -> 4...
console.log(`O primeiro valor do array é ${num[0]}`)
num.sort() // Posiciona o array de forma crescente
console.log(num)
num.push(1) // Adiciona um elemento na última posição do array
console.log(num) // Como o "sort" veio antes, ele organiza e depois adiciona outro valor
console.log(`Agora o vetor tem ${num.length} posições`)

let pos = num.indexOf(8) //Retorna para a variável a POSIÇÃO do valor, como esse array foi ordenado, o 8 mudou da sua posição original 
console.log(`O valor 8 está na posição ${pos}`)

pos = num.indexOf(4)
console.log(`O valor está na posição ${pos}`) // Posição "-1" significa que o valor não foi encontrado

if (pos == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor está na posição ${pos}`)
}