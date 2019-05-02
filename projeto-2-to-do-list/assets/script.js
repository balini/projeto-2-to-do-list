window.addEventListener('DOMContentLoaded', function () {
    let getClick = document.querySelector('#getClick');
    const resultado = document.querySelector('#resultado'); //Ul que recebe a li
    let getText = document.querySelector('#getText'); // tarefa digitada
    let checkAll = document.querySelector('#checkAll');
    let deletedAll = document.querySelector('#deletedAll');


    getClick.addEventListener('click', function () {        

        //Adiconando tarefa

        let resultadoLista = document.createElement("li"); //elemento criado 
        resultadoLista.classList = 'resultado--lista';
        resultado.appendChild(resultadoLista);

        //marcando tarefa como feito

        let marcador = document.createElement("input");
        marcador.setAttribute('type', 'checkbox');
        resultadoLista.appendChild(marcador);
        marcador.classList = 'marcador';

        //texto 
        let texto = document.createElement('span');
        let getTextValue = getText.value; //valor digitado da tarefa
        resultadoLista.appendChild(texto);
        texto.innerHTML += getTextValue; //adiciona o texto digitado no html

        
        
        //Excluindo tarefas

        let fechar = document.createElement('button');// 'x' para excluir tarefa
        fechar.innerHTML = 'x';//adiciona 'x' para o botão
        fechar.classList = 'close';
        resultadoLista.appendChild(fechar);

        //função excluir tarefas
        fechar.addEventListener('click', function () {
            resultado.removeChild(resultadoLista);
        })

        //função de marcar tarefas
        marcador.addEventListener('click', function () {
            if(this.checked == true){texto.classList.toggle('tarefa--concluida', true)}
            else{texto.classList.toggle('tarefa--concluida', false)} 
        })

        //excluindo todas as tarefas
        deletedAll.addEventListener('click', function deleted() {
            resultadoLista.remove();
        })

    })

     //marcando todas as tarfeas
     checkAll.addEventListener('click', function maracarTudo() {
        let comprimentoMarcador = document.querySelectorAll('.marcador')
        console.log(comprimentoMarcador);
        comprimentoMarcador.forEach(element => {
            element.marcador;
        //    texto.classList.toggle('tarefa--concluida', true);
        });
    })











    



});