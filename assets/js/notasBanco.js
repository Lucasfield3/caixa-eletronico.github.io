function Calcular(){

    var valorInput =  document.getElementById('valor-saque').value;
    var lista = document.getElementById('list-result');
    var quantiMax = document.getElementById('quantia-max');
    let notas = [
        {
            valor:200,
            quantidade:parseInt(document.getElementById('quantidade-200').value)
        },
        {
            valor:100,
            quantidade:parseInt(document.getElementById('quantidade-100').value)
    
        }, 
        {
            valor:50,
            quantidade:parseInt(document.getElementById('quantidade-50').value)
        }, 
        {
            valor:20,
            quantidade:parseInt(document.getElementById('quantidade-20').value)
        }, 
        {
            valor:10,
            quantidade:parseInt(document.getElementById('quantidade-10').value)
        }, 
        {
            valor:5,
            quantidade:parseInt(document.getElementById('quantidade-5').value)
        }, 
        {
            valor:2,
            quantidade:parseInt(document.getElementById('quantidade-2').value)
        }]
 
        let totalNotas = notas.reduce((a, nota)=> a + nota.valor * nota.quantidade, 0)
        console.log(totalNotas)
        
            for(let i = 0; i < notas.length; i++){
                if(valorInput > 0 && valorInput <= totalNotas){
                    if((valorInput % 10) !== 1 && (valorInput % 10) !== 3 ){
                       
                        if(notas[i].quantidade > 0 && (notas[i].quantidade * notas[i].valor) >= valorInput){
                            let quantiaAserUsada = valorInput/notas[i].valor
                            let pluralSing = (Math.trunc(quantiaAserUsada) == 1) ? `nota de` : `notas de` 
                            var result =  document.createElement('P');
                            
                            if(quantiaAserUsada >= 1 && valorInput % notas[i].valor == 0 || valorInput % notas[i].valor * notas[i].valor == valorInput){
            
                                if(notas[i].quantidade >= quantiaAserUsada){                              
                                    console.log(`${quantiaAserUsada} ${pluralSing} ${notas[i].valor}`)
                                    result.innerText = `${quantiaAserUsada} ${pluralSing} ${notas[i].valor}`
                                    lista.appendChild(result)
                                    notas[i].quantidade - quantiaAserUsada
                                    valorInput = valorInput - quantiaAserUsada * notas[i].valor
                                    console.log(valorInput)
                                    
                                }else if(notas[i].quantidade < quantiaAserUsada){               
                                    console.log(`${notas[i].quantidade} ${pluralSing} ${notas[i].valor}`)
                                    result.innerText = `${quantiaAserUsada} ${pluralSing} ${notas[i].valor}`
                                    lista.appendChild(result)
                                    notas[i].quantidade = 0   
                                    valorInput = valorInput - notas[i].valor
                                    console.log(valorInput)
                                }       
                                
                            }
                            if(valorInput == 0){
                                break;
                            }
                            if(quantiaAserUsada >= 1 && valorInput % notas[i].valor !== 0){
                                                               
                                if(notas[i].quantidade >= quantiaAserUsada){
                                                                                                                 
                                    if(Number.isInteger(quantiaAserUsada) == true){                                                           
                                        console.log(`${quantiaAserUsada} ${pluralSing} ${notas[i].valor}`)
                                        result.innerText = `${quantiaAserUsada} ${pluralSing} ${notas[i].valor}`
                                        lista.appendChild(result)
                                        notas[i].quantidade -  quantiaAserUsada
                                        valorInput = valorInput - quantiaAserUsada * notas[i].valor
                                        console.log(valorInput)
                                        
                                    }else if(valorInput  % notas[i].valor == valorInput ) {                      
                                        console.log(`${quantiaAserUsada} ${pluralSing} ${notas[i].valor}`)
                                        result.innerText = `${quantiaAserUsada} ${pluralSing} ${notas[i].valor}`
                                        lista.appendChild(result)
                                        notas[i].quantidade -  quantiaAserUsada
                                        valorInput = valorInput - quantiaAserUsada * notas[i].valor
                                        console.log(valorInput)
                                        
                                    }else if (Number.isInteger(quantiaAserUsada) == false && valorInput - notas[i].valor !== 1 && valorInput - notas[i].valor !==3 ){   
                                        console.log(`${Math.trunc(quantiaAserUsada)} ${pluralSing} ${notas[i].valor}`)
                                        result.innerText = `${Math.trunc(quantiaAserUsada)} ${pluralSing} ${notas[i].valor}`
                                        lista.appendChild(result)
                                        notas[i].quantidade - Math.trunc(quantiaAserUsada)
                                        valorInput = valorInput - (Math.trunc(quantiaAserUsada) * notas[i].valor)
                                        console.log(valorInput)
                                    }
                                    
                                    
                                   
                                }else if(notas[i].quantidade < quantiaAserUsada){
                                    console.log(`${notas[i].quantidade} ${pluralSing} ${notas[i].valor}`)
                                    result.innerText = `${quantiaAserUsada} ${pluralSing} ${notas[i].valor}`
                                    lista.appendChild(result)
                                    notas[i].quantidade = 0   
                                    valorInput = valorInput - notas[i].valor
                                    console.log(valorInput)
                                }
                            }
                            if(valorInput == 0){
                                break;
                            }
                            
                        }else if(notas[i].quantidade > 0 && (notas[i].quantidade * notas[i].valor) < valorInput && Number.isInteger(valorInput/notas[i].valor) == true){
                            let quantiaAserUsada = valorInput/notas[i].valor
                            let pluralSing = (Math.trunc(quantiaAserUsada) == 1) ? `nota de` : `notas de` 
                            var result =  document.createElement('P');
                            console.log(`${notas[i].quantidade} ${pluralSing} ${notas[i].valor}`)
                            result.innerText = `${notas[i].quantidade} ${pluralSing} ${notas[i].valor}`
                            lista.appendChild(result)
                            valorInput = valorInput - (notas[i].quantidade * notas[i].valor)
                            notas[i].quantidade = 0   
                            console.log(valorInput)
                        }else if(notas[i].quantidade > 0 && (notas[i].quantidade * notas[i].valor) < valorInput && Number.isInteger(valorInput/notas[i].valor) == false){
                            let quantiaAserUsada = valorInput/notas[i].valor
                            let pluralSing = (Math.trunc(quantiaAserUsada) == 1) ? `nota de` : `notas de` 
                            var result =  document.createElement('P');
                            console.log(`${Math.trunc(notas[i].quantidade)} ${pluralSing} ${notas[i].valor}`)
                            result.innerText = `${Math.trunc(notas[i].quantidade)} ${pluralSing} ${notas[i].valor}`
                            lista.appendChild(result)
                            valorInput = valorInput - (Math.trunc(notas[i].quantidade) * notas[i].valor)
                            notas[i].quantidade = 0
                            console.log(valorInput)
                        }
                        if(valorInput == 0){
                            break;
                        }
                    }else{
                        console.log('não há esse valor exato ')
                        quantiMax.innerHTML = `não há esse valor exato`
                    }
                    
                }else{
                    console.log('essa quantia ultrapassa o valor máximo de ' + totalNotas)
                    quantiMax.innerHTML = `essa quantia ultrapassa o valor máximo de: ${totalNotas}`
                  
                }

            }

}

    
