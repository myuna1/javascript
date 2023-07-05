var sort = []
function loteria(){
    
    var txtlot = document.querySelector('input#txtlot')
    var res = document.querySelector('div#res')
    for(var i = 0; i < sort.lenght; i = i + 1) {
        if(sort[i] == txtlot){
            alert("Número já sorteado!")
            break
        }
    }
}  
sort.push(txtlot)