const dados = [{
    doador: "A",
    recepitores: ["A", "AB"],
},
{
    doador: "B",
    recepitores: ["B", "AB"],
},
{
    doador: "O",
    recepitores: ["A", "B", "AB", "O"],
},
{
    doador: "AB",
    recepitores: ["AB"],
}
]
function leiaInputTipoSanguineo() {

    const tipoDoador = document.getElementById("selectDoador")
    const tipoRecepitor = document.getElementById("selectReceptor")
    const result = document.getElementById("resultado");

    let eValido =
   // let eValido = false;
   // for (let iDoador = 0; iDoador < dados.length; iDoador++) {
     //   const itemDoador = dados[iDoador];
//
  //      if (itemDoador.doador === tipoDoador.value) {
    //        const itemRecepitores = itemDoador.recepitores;
//
  //          for (let iRecepitores = 0; iRecepitores < itemRecepitores.length;
    //            iRecepitores++) {
      //          const itemElement = itemRecepitores[iRecepitores];
//
  //              if (itemElement === tipoRecepitor.value) {
    //                eValido = true
      //          }
//
 //           }
  //      }
//
   // }
//
  //  if (eValido === true) {
    //    result.textContent = "É válido";
      //  
//    }else {
//        result.textContent = "Não é válido"
//    }
//}

 function buscaDoador(doador){
    for (let index = 0;1 < dados.length; index++) {
        const element = dados[index];
        if (doador ===element.doador) 
        {
            return element
        }
    }
    return null   
}

function buscaRecepitores(receptor,recepitores){
    for (let index = 0;1 < recepitores.length; index++) {
        const element = recepitores[index];
        if (receptor ===element) 
        {
            return true
        }
    }
    return false
}
}
  //  return{
    //    doador: "O",
      //  recepitores: "A","B","AB","O"
    //}
// function buscaRecepitores (buscaRecepitor){
    // return{
        //doador: "A",
        //recepitores: "A","AB"
   // }
//}
//}
//const 'element': {
   // doador: "";
   // recepitores: ""[];
////}