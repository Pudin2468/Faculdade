function contar() {
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERROR] faltam dados a serem preenchidos')
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (i < f) {
            // contagem crescente
            for(let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} `
            }
        } else {
            // contagem decrescente
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} `
            }
        }
    }
    
    
    
}