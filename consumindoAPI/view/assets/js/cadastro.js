const $nome = document.getElementById('nome');
const $idade = document.getElementById('idade');
const $botao = document.getElementById('botao');

const url = 'http://127.0.0.1:3000/clientes';

const cadastraCliente = () => {

    const dados = {
        headers:{
            'Content-Type':'application/json'
        },
        method:'POST',
        body : JSON.stringify({
            'nome':$nome.value,
            'idade':$idade.value
        })
    }

    fetch( url,dados )
}

$botao.addEventListener('click', cadastraCliente);


