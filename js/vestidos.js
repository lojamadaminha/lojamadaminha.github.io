// Code goes here
function carregarVestidos() {
    var saida = '';
    var vestidos = [];
    var tamanho = '128';

    $.getJSON("js/vestidos.json", function (data) {
        saida = '';
        vestidos = [];
        vestidos = data.vestidos;

        for (i = 0; i < vestidos.length; i++) {
            saida += '<!-- Work -->';
            saida += '<div class="col-md-4 col-xs-6 work">';
            saida += '<img class="img-responsive" src="./img/vestidos/' + vestidos[i].imagem + '" alt="">';
            saida += '<div class="overlay"></div>';
            saida += '<div class="work-content">';
            if (vestidos[i].preco != "") {
                saida += '<h3> R$ ' + vestidos[i].preco + ',00 </h3>';
            }
            if (vestidos[i].qtd6m != "") {
                saida += '<span>6 meses: ' + vestidos[i].qtd6m + ' </span>';
            }
            if (vestidos[i].qtd1 != "") {
                saida += '<span>1 ano: ' + vestidos[i].qtd1 + ' </span>';
            }
            if (vestidos[i].qtd2 != "") {
                saida += '<span>2 anos: ' + vestidos[i].qtd2 + ' </span>';
            }
            if (vestidos[i].qtd4 != "") {
                saida += '<span>4 anos: ' + vestidos[i].qtd4 + ' </span>';
            }
            if (vestidos[i].qtd6 != "") {
                saida += '<span>6 anos: ' + vestidos[i].qtd6 + ' </span>';
            }
            if (vestidos[i].qtd8 != "") {
                saida += '<span>8 anos: ' + vestidos[i].qtd8 + ' </span>';
            }
            if (vestidos[i].qtd10 != "") {
                saida += '<span>10 anos: ' + vestidos[i].qtd10 + ' </span>';
            }
            if (vestidos[i].qtd6m == "" && vestidos[i].qtd1 == "" && vestidos[i].qtd2 == "" && vestidos[i].qtd4 == "" && vestidos[i].qtd6 == "" && vestidos[i].qtd8 == "" && vestidos[i].qtd10 == "") {
                saida += '<span>Encomende</span>';
            }
            saida += '</div>';
            saida += '</div>';
            saida += '<!-- /Work -->';
        }

        document.getElementById('quadro-vestidos').innerHTML = saida;
    });

    $.getJSON("js/vestidos.json", function (data) {
        saida = '';
        vestidos = [];

        vestidos = data.vestidos;

        saida += '<table class="table"><thead><tr><th scope="col">#</th><th scope="col">Imagem</th><th scope="col">Preço</th><th scope="col">6 meses</th><th scope="col">1 ano</th><th scope="col">2 anos</th><th scope="col">4 anos</th><th scope="col">6 anos</th><th scope="col">8 anos</th><th scope="col">10 anos</th><th scope="col">Encomende</th></tr></thead><tbody>';
        for (i = 0; i < vestidos.length; i++) {
            saida += '<tr>';
            saida += '<th scope="row">' + (i + 1) + '</th>';
            saida += '<th><img class="img-responsive" src="./img/vestidos/' + vestidos[i].imagem + '" alt="" width="' + tamanho + '" height="' + tamanho + '" ></th>';
            if (vestidos[i].preco != "") {
                saida += '<th> R$ ' + vestidos[i].preco + ',00 </th>';
            } else {
                saida += '<th> R$ 0,00 </th>';
            }
            if (vestidos[i].qtd6m != "") {
                saida += '<th>' + vestidos[i].qtd6m + ' </th>';
            } else {
                saida += '<th> 0 </th>';
            }
            if (vestidos[i].qtd1 != "") {
                saida += '<th>' + vestidos[i].qtd1 + ' </th>';
            } else {
                saida += '<th> 0 </th>';
            }
            if (vestidos[i].qtd2 != "") {
                saida += '<th>' + vestidos[i].qtd2 + ' </th>';
            } else {
                saida += '<th> 0 </th>';
            }
            if (vestidos[i].qtd4 != "") {
                saida += '<th>' + vestidos[i].qtd4 + ' </th>';
            } else {
                saida += '<th> 0 </th>';
            }
            if (vestidos[i].qtd6 != "") {
                saida += '<th>' + vestidos[i].qtd6 + ' </th>';
            } else {
                saida += '<th> 0 </th>';
            }
            if (vestidos[i].qtd8 != "") {
                saida += '<th>' + vestidos[i].qtd8 + ' </th>';
            } else {
                saida += '<th> 0 </th>';
            }
            if (vestidos[i].qtd10 != "") {
                saida += '<th>' + vestidos[i].qtd10 + ' </th>';
            } else {
                saida += '<th> 0 </th>';
            }
            if (vestidos[i].link != "") {
                saida += '<th><a href="' + vestidos[i].link +'" target="_blank"><i class="fa fa-external-link"></i></a></th>';
            } else {
                saida += '<th><a href="#"><i class="fa fa-external-link"></i></a></th>';
            }
        }
        saida += '</tbody></table>';

        document.getElementById('tabela-vestidos').innerHTML = saida;
    });
}