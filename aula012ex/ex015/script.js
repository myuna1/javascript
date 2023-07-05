function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 2){
                //bebe
                img.setAttribute('src', 'bebemasc.png')
            } else if (idade <8) {
                 //criança 2 a 8
                 img.setAttribute('src', 'criançamasc.png')
            } else if (idade <13) {
                // inicio adolescencia
                img.setAttribute('src','preadolemasc.png')
            } else if (idade <18) {
                //adolescente jovem
                img.setAttribute('src','adolescentemasc.png')
            } else if (idade <30) {
                //jovem adulto
                img.setAttribute('src','jovemmasc.png')
            } else if (idade <55) {
                //semivelho
                img.setAttribute('src','semivelho.png')
            } else {
                //idoso
                img.setAttribute('src','velho.png')
            }
               
            
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 2){
                //bebe
                img.setAttribute('src', 'bebefem.png')
            } else if (idade <8) {
                 //criança 2 a 8
                 img.setAttribute('src', 'criançafem.png')
            } else if (idade <13) {
                // inicio adolescencia
                img.setAttribute('src','preadolefem.png')
            } else if (idade <18) {
                //adolescente jovem
                img.setAttribute('src','adolescentefem.png')
            } else if (idade <30) {
                //jovem adulta
                img.setAttribute('src','jovemfem.png')
            } else if (idade <55) {
                //semivelha
                img.setAttribute('src','semivelha.png')
            } else {
                //idosa
                img.setAttribute('src','velha.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}