function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if(fAno.value.length == 0 || fAno.value > ano){
        window.alert('[ERRO] Verifique os dados')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'imagens/homembebe.jpg')
            } else if (idade < 21){
                img.setAttribute('src', 'imagens/homemjovem.jpg')
            } else if (idade < 50){
                img.setAttribute('src', 'imagens/homemadulto.jpg')
            } else {
                img.setAttribute('src', 'imagens/homemvelho.jpg')
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'imagens/mulherbebe.jpg')
            } else if (idade < 21){
                img.setAttribute('src', 'imagens/mulherjovem.jpg')
            } else if (idade < 50){
                img.setAttribute('src', 'imagens/mulheradulta.jpg')
            } else {
                img.setAttribute('src', 'imagens/mulhervelha.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}