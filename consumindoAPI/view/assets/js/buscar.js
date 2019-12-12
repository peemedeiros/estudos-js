const mostrarDados = () => {
    const url = 'http://127.0.0.1:3000/clientes';

    fetch( url )
    .then(res => res.json)
    .then(res => listarDados(res))

    listarDados = (json) => {
        return json.reduce( (acc, row, i) => `
        ${acc}
            <div class="linha-mostrar">
                <div class="coluna-h">
                    ${row}
                </div>

                <div class="coluna-h">
                    ${row}
                </div>
            </div>
        ` );
    }

}