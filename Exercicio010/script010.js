function calcular() {
    var textv = document.querySelector('input#txtvel')
    var res = document.querySelector('div#res')
    var vel = Number(textv.value)
    res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel}Km/h</strong></p>`
    if (vel > 60) {
        res.innerHTML += `Você está <strong>MULTADO</strong> por excesso de velocidade</p>`
    }
    res.innerHTML += `<p>Dirija sempre com cinto de segurança!</p>`
}