function gerar(){

    let num=document.getElementById('txtn')
    let res=document.getElementById('res')

    if (num.value.length ==0 ) {
        window.alert('[EROO] Faltam dados!')

    }else { 
        let n =Number (num.value)
        res.innerHTML = '' 
        res.innerHTML+= (` A tabuado do ${n} é:<p>`)
    for(let c=1;c <= 10;c ++){
        let resultado= n *c
         res.innerHTML += `${n} x ${c} = ${resultado}<br>`
    }
}
}