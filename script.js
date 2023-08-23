function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if  (fano.value.length === 0 || Number(fano.value) > ano) {
        window.alert("[ERRO] verifique os dados e tente novamente!")
    } else {
        
     var fsex = document.getElementsByName('radsex')
     var idade = ano - Number(fano.value)
     var gênero = ''
     var img = document.createElement('img')
     img.setAttribute('id', 'foto')
     if (fsex[0].checked) {
        gênero = 'homem'
        if (idade >= 0 && idade < 10) {
            //criança
            img.setAttribute('src', 'meninocrianca.png');

        } else if (idade < 29) {
            //jovem
            img.setAttribute('src', 'homemjovem.png');
        } else if (idade < 60) {
            //adulto
            img.setAttribute('src', 'homemadulto.png');
        } else {
            //idoso
            img.setAttribute('src', 'homemidoso.png');
        }

     } else if (fsex[1].checked) {
        gênero = 'mulher'
        if (idade >= 0 && idade < 11) {
            //criança
            img.setAttribute('src', 'meninacrianca.png');
        } else if (idade < 29) {
            //jovem
            img.setAttribute('src', 'mulherjovem.png');
        } else if (idade < 60) {
            //adulto
            img.setAttribute('src', 'mulheradulta.png');
        } else {    
            //idoso
            img.setAttribute('src', 'mulheridosa.png');
        }
    }         
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
    res.appendChild(img)
     }
}

