
function carregar() {

    var msg = window.document.querySelector('div#msg')
    var title = window.document.querySelector('header#title')
    var section = window.document.querySelector('section#section')
    var rodape = window.document.querySelector('footer#rodape')
    var img = window.document.querySelector('img#image')
    var data = new Date()
    var hora = data.getHours(), minuto = data.getMinutes()

    if(minuto < 10) {
        msg.innerHTML = `Agora são ${hora}:0${minuto} Horas.`
    } else {
        msg.innerHTML = `Agora são ${hora}:${minuto} Horas.`
    }

    if(hora >= 6 && hora < 12) {
        //Bom dia
        img.src = 'imagens/amanhecer.png'
        window.document.body.style.background = '#FCF2B9'
        section.style.background = '#dddddd'
        title.style.color = '#333333'
        rodape.style.color = '#333333'
    } else if(hora >= 11 && hora < 16) {
        //Boa tarde
        img.src = 'imagens/dia.png'
        window.document.body.style.background = '#FBFCDB'
        section.style.background = '#dddddd'
        title.style.color = '#333333'
        rodape.style.color = '#333333'
    } else if(hora >= 16 && hora < 19) {
        //Boa noite
        img.src = 'imagens/entardecer.png'
        window.document.body.style.background = '#FF720B'
    } else {
        //Boa madrugada
        img.src = 'imagens/noite.png'
        window.document.body.style.background = '#608CD9'
    }

}