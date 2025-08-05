function carregar() {

var msg= window.document.getElementById('msg')
var img= window.document.getElementById('imagens')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas`
if(hora >=0 && hora < 12 ){
    img.src="imagens/manha.png"
    document.body.style.background= "#f0f351c9"
}else if(hora >=12 && hora < 18){
    img.src= "imagens/tarde.png"
    document.body.style.background= "#FDECBF"
}else{
    img.src= "imagens/noite.png"
    document.body.style.background= "#0f151dff"
}
}