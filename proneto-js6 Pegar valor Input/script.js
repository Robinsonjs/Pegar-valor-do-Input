//seleção elementos
 let btn = document.querySelector("#enviar");

//eventos

btn.addEventListener("click" ,function(e) {
    e.preventDefault();
    

    let nome = document.querySelector("#nome");

    let valor = nome.value ;

    

    let p = document.querySelector("#resultado");
    p.innerHTML = valor;
    if (valor === "") {
        p.innerHTML = `Digite o nome`;
        
    }
    

})
 


