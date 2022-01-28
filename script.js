
function gerarLotofacil(){

    let min = 1;
    let max = 25;
    let numeros = [];
    let qtd_n_lotofacil = document.getElementById('qtd_n_lotofacil').value;
  
    
	for(let i=0; i < qtd_n_lotofacil; i++){
		
		valor = Math.floor(Math.random() * (max - min + 1)) + min;
		
		if(numeros.indexOf(valor) == -1){

			numeros.push(valor);

		}else{
			i--;
		}
    }
	
	let numerosCrescente = numeros.sort(function (a,b){
		return a - b;
	});
    
   document.getElementById('result-lotofacil').innerHTML = `${numerosCrescente.join(', ')}`;
	   
}



function gerarMegasena(){

    let min = 1;
    let max = 60;
    let numeros = [];
    let qtd_n_megasena = document.getElementById('qtd_n_megasena');

    for(let i=0; i < qtd_n_megasena.value; i++){
        
        valor = Math.floor(Math.random() * (max - min + 1)) + min;
        
        if(numeros.indexOf(valor) == -1){

            numeros.push(valor);

        }else{
            i--;
        }
    }
	
	let numerosCrescente = numeros.sort(function (a,b){
		return a - b;
	});

    document.getElementById('result-megasena').innerHTML = `${numerosCrescente.join(', ')}`;
    
}

function gerarQuina(){

    let min = 1;
    let max = 80;
    let numeros = [];
    let qtd_n_quina = document.getElementById('qtd_n_quina');

    for(let i=0; i < qtd_n_quina.value; i++){
        
        valor = Math.floor(Math.random() * (max - min + 1)) + min;
        
        if(numeros.indexOf(valor) == -1){

            numeros.push(valor);

        }else{
            i--;
        }
    }
	
	let numerosCrescente = numeros.sort(function (a,b){
		return a - b;
	});

    document.getElementById('result-quina').innerHTML = `${numerosCrescente.join(', ')}`;
    
}

function gerarLotomania(){

    let min = 0;
    let max = 99;
    let numeros = [];

    for(let i=0; i < 50; i++){
        
        valor = Math.floor(Math.random() * (max - min + 1)) + min;
        
        if(numeros.indexOf(valor) == -1){

            numeros.push(valor);

        }else{
            i--;
        }
    }
	
	let numerosCrescente = numeros.sort(function (a,b){
		return a - b;
	});

    document.getElementById('result-lotomania').innerHTML = `${numerosCrescente.join(', ')}`;
    
}

