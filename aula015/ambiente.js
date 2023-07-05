let num = [32,98,15,21,46,3,9,1,88]

/*console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(9)
if (pos == -1) {
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`sexo na lajeeeee`)
}

console.log(num.sort((a,b) => {
    return a-b
}))*/

console.log(num.sort(function(a,b){return a-b;}))
