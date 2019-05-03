window.addEventListener('DOMContentLoaded', function () {
    let getClick = document.querySelector('#getClick');
    const resultado = document.querySelector('#resultado'); //Ul que recebe a li
    let getText = document.querySelector('#getText'); // tarefa digitada
    let checkAll = document.querySelector('#checkAll');
    let deletedAll = document.querySelector('#deletedAll');


    //Evento que pega o clique do botão de adicionar tarefas
    getClick.addEventListener('click', function add() {


        //Adiconando tarefas à lista
        let resultadoLista = document.createElement("li"); //elemento criado 
        resultadoLista.classList = 'resultado--lista';

        //Criando o checkbox
        let marcador = document.createElement("input");
        marcador.setAttribute('type', 'checkbox');
        resultadoLista.appendChild(marcador);
        marcador.classList = 'marcador';

        //Criando tags para colocar as tarefas 
        const texto = document.createElement('span');
        let getTextValue = getText.value; //valor digitado da tarefa
        const valorTexto = getTextValue.trim();//elimina todos os espaços
        texto.classList = 'texto';
        texto.innerHTML += getTextValue; //adiciona o texto digitado no html

        //Excluindo tarefas
        let fechar = document.createElement('button');// 'x' para excluir tarefa
        fechar.innerHTML = 'x';//adiciona 'x' para o botão
        fechar.classList = 'close';

        if (valorTexto == "") {
            resultadoLista.remove();
            alert("Digite uma tarefa válida!")
        } else {
            resultado.appendChild(resultadoLista);
            resultadoLista.appendChild(texto);
            resultadoLista.appendChild(fechar);



        }

        //Evento de excluir tarefas
        fechar.addEventListener('click', function () {
            resultado.removeChild(resultadoLista);
        })

        //Evento de marcar tarefas
        marcador.addEventListener('click', function () {
            if (this.checked == true) { texto.classList.toggle('tarefa--concluida', true) }
            else { texto.classList.toggle('tarefa--concluida', false) }
        })

        //Evento de excluir todas as tarefas
        deletedAll.addEventListener('click', function deleted() {
            resultadoLista.remove();
        })



    })

    checkAll.addEventListener('click', marcarTudo)


    //Função de marcar tudo
    function marcarTudo() {

        //Evento de marcar todas as tarefas
        let tarefas = document.querySelectorAll('.resultado--lista');
        let action = false;


        //Marcando todas as checkbox
        for (var i = 0; i < tarefas.length; i++) {
            const check = tarefas[i].querySelector('.marcador').checked; //pegar o check dentro do loop
            if (!check) {
                action = true;//se não maracado marque
                break;//para de rodar o laço
            } else {
                action = false; //se marcado, desmarque
            }
        }


        //Marcando todos os textos
        tarefas.forEach(item => {
            // element.classList.toggle('tarefa--concluida');
            item.querySelector('.marcador').checked = action;
            const texto1 = item.querySelector('span');


            if (action) {
                texto1.classList = 'tarefa--concluida';
            } else {
                texto1.classList = '';
            }
        })







        // Esse código element.classList.toggle('tarefa--concluida') equivale a escrever:
        // if (element.classList == 'tarefa--concluida') {
        //     element.classList = ''
        // } else if (element.classList == '') {
        //     element.classList = 'tarefa--concluida'
        // }






    }

});
