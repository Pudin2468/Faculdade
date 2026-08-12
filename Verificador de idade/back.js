function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('textoano')
    var res = document.getElementById ('resultado')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[Erro] Verifique os dados inseridos e tente novamente!')  
    } else {
        var fsex = document.getElementsByName('radsexo')
        var idade = ano - Number(fano.value)
        var genero = ''
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                res.innerHTML = `detectamos uma Criança com ${idade} anos.`
            } else if (idade < 21) {
                res.innerHTML = `detectamos um Jovem com ${idade} anos.`
            } else if (idade < 60) {
                res.innerHTML = `detectamos um Adulto com ${idade} anos.`
            } else if (idade < 110) {
                res.innerHTML = `detectamos um Idoso com ${idade} anos.`
            } else 
                window.alert('[Erro] Verifique os dados inseridos e tente novamente!')
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                res.innerHTML = `detectamos uma Criança com ${idade} anos.`
            } else if (idade < 21) {
                res.innerHTML = `detectamos uma Jovem com ${idade} anos.`
            } else if (idade < 60) {
                res.innerHTML = `detectamos uma Adulta com ${idade} anos.`
            } else if (idade < 110) {
                res.innerHTML = `detectamos uma Idosa com ${idade} anos.`
            } else 
                window.alert('[Erro] Verifique os dados inseridos e tente novamente!')
        }
        res.style.textAlign = 'center'
    }
}