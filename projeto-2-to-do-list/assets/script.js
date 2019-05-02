window.addEventListener('DOMContentLoaded', function() {
    let getClick = document.querySelector('#getClick');
    const resultado = document.querySelector('#resultado');
    let getText = document.querySelector('#getText');

    getClick.addEventListener('click', function(add) {
        add.preventDefault();

        let getTextValue = getText.value;

        let resultadoLista = document.createElement("li");
        let fechar = document.createElement('p');

        resultadoLista.innerHTML = getTextValue;
        fechar.innerHTML = 'x';

        resultadoLista.classList = 'lista';
        fechar.classList = 'xis';

        resultado.appendChild(resultadoLista);
        resultado.appendChild(fechar);
        


    })






  });