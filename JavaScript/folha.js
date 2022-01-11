function calcular(){
    var txtv =  window.document.querySelector('input#txtvel')
    var res = window.document.querySelector('div#res')
    var vel = Number(txtv.value)

    res.innerHTML= `<p>Sua velocidade atual é de <strong>${vel} km/h</strong></p>`

    if(vel > 60) {
        res.innerHTML += `<p>Você Foi <strong>MULTADO (a)</strong> por exceder o limite de 60 km/h</p>`
    }
    
    res.innerHTML += `<p>Dirija com cuidado e não esqueça o cinto de segurança.</p>`

}
