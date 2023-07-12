var candidatos = ['Jessica','Joao Victor','Ismael'];
var votosCands = [0,0,0];
 
function votar(){
    
    // Desabilitar o botao de votar
    const btnVotar = document.querySelector("#btnVotar");
    btnVotar.disabled = true;

    const iptCands = document.getElementsByName("candidatos");
    let seVoto = false;
    for (var k=0; k<iptCands.length; k++){
        if (iptCands[k].checked){
            seVoto = true;
            break;
        }
    }

    const spnMsg = document.getElementById("msg");    
    if (seVoto){
        votosCands[k] = votosCands[k]+1;    
        
        spnMsg.innerHTML = "Obrigado pelo seu voto. ";
        setTimeout(function () {
            spnMsg.innerHTML = "";
            iptCands[k].checked = false;
            btnVotar.disabled = false;   
        }, 2000);    
    }else{
        spnMsg.innerHTML = "Por favor, selecione o seu voto. ";
        btnVotar.disabled = false;   
    }
}

function resultado(){

    document.querySelector("#btnVotar").disabled = true;
        
    var msg = "<table>";
    for (let k=0; k<candidatos.length; k++){
        msg += "<tr>";
        msg += "<td>"+candidatos[k]+"</td>";
        msg += "<td>"+votosCands[k]+"</td>";
        msg += "</tr>";
    }
    msg += "</table>";
    msg += "<hr>";
    msg += "O vencedor da eleição foi: ";
    msg += getVencedor();


    const spnMsg = document.getElementById("msg");
    spnMsg.innerHTML = msg;

}



function getVencedor(){
   
    const max = Math.max.apply(null, votosCands);
    const idxMax = votosCands.indexOf(max);
    // console.log(max);
    return candidatos[idxMax];
    

}