function minhaLista () {
    var mult;
    const pegar = document.getElementById("lista")
    let get_msg = document.getElementById("conteudo").value;
    let get_qnt = document.getElementById("quantidade").value;
    for( mult=0; mult<get_qnt; mult++){
        let novaLista= document.createElement("li");
        novaLista.appendChild(document.createTextNode((get_msg)));
        pegar.appendChild(novaLista)        
    }
  
}


