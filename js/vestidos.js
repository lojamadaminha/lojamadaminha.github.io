// Code goes here
function carregarVestidos() {
  
    var saida = '';
    
    var vestidos = [];
    
    $.getJSON("js/vestidos.json", function(data) {
        vestidos = data.vestidos;

        for (i=0; i <vestidos.length;i++) {
            saida += '<!-- Work -->';
            saida += '<div class="col-md-4 col-xs-6 work">';
            saida += '<img class="img-responsive" src="'+vestidos[i].imagem+'" alt="">';
            saida += '<div class="overlay"></div>';
            saida += '<div class="work-content">';
            if(vestidos[i].preco != ""){
                saida += '<h3> R$ '+vestidos[i].preco+',00 </h3>';
            }
            if(vestidos[i].qtd6m != ""){
                saida += '<span>6 meses: '+vestidos[i].qtd6m+' </span>';
            }
            if(vestidos[i].qtd1 != ""){
                saida += '<span>1 ano: '+vestidos[i].qtd1+' </span>';
            }
            if(vestidos[i].qtd2 != ""){
                saida += '<span>2 anos: '+vestidos[i].qtd2+' </span>';
            }
            if(vestidos[i].qtd4 != ""){
                saida += '<span>4 anos: '+vestidos[i].qtd4+' </span>';
            }
            if(vestidos[i].qtd6 != ""){
                saida += '<span>6 anos: '+vestidos[i].qtd6+' </span>';
            }
            if(vestidos[i].qtd8 != ""){
                saida += '<span>8 anos: '+vestidos[i].qtd8+' </span>';
            }
            if(vestidos[i].qtd10 != ""){
                saida += '<span>10 anos: '+vestidos[i].qtd10+' </span>';
            }
            if(vestidos[i].qtd6m == "" && vestidos[i].qtd1 == "" && vestidos[i].qtd2 == "" && vestidos[i].qtd4 == "" && vestidos[i].qtd6 == "" && vestidos[i].qtd8 == "" && vestidos[i].qtd10 == ""){
                saida += '<span>Encomende</span>';
            }
            saida += '</div>';
            saida += '</div>';
            saida += '<!-- /Work -->';
        }
        
        document.getElementById('tela').innerHTML = saida;
    });
  }