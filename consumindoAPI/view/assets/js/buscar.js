const mostrarDados = async () => {
    const url = 'http://127.0.0.1:3000/clientes';

    return await fetch( url )
    .then(res => res.json())
    .then(json => {
        return json.reduce( (acc, row, i) => `${acc}
            <div class="linha-mostrar">
                <div class="coluna-h">
                    ${row.nome}
                </div>

                <div class="coluna-h">
                    ${row.idade}
                </div>
            </div>
        `);
    });
}

(async () => {
    const $data = await mostrarDados();
})();


