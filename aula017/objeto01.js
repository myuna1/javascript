let amigo = {nome:'Judeu',
sexo: 'viado',
peso: 88.8,
engordar(p=0){
    console.log('Engordou')
    this.peso += p
}}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)
