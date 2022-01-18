
let ativar = 0
const ativarNavResponsivo = ()=>{
    ativar++
    if(ativar%2 == 1){
        document.getElementById("nav-itens-responsivo").style.display = 'block'
        document.getElementById("btn-nav").innerHTML = "X"
        document.getElementById("nav").style.display = "block"
    }else{
        document.getElementById("nav-itens-responsivo").style.display = 'none'
        document.getElementById("btn-nav").innerHTML = "&#9776"
        document.getElementById("nav").style.display = "flex"

    }
    
}