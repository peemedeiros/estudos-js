const express = require('express');
const router = express.Router();

//Criamos um json apenas para testar o funcionamento do metodo get do protocolo HTTP//
const bd = [{
    "id":"1",
    "produto":"teclado",
    "quantidade":"100"
} , {
    "id":"2",
    "produto":"mouse",
    "quantidade":"100"
}];

//Aqui nos estamos buscando via GET informações contindas no 'bd'.
//E estamos 
// router.get("/", (req, res) => {
//     res.json({
//                 "status":"ok",
//                 "data":bd
//             });
// });

// router.get("/:id", (req, res) => {
//     const id = req.params.id;
//     res.json({
//         "status":"ok",
//         "data":bd[id - 1]
//     });
// });

router.post('/', (req, res) => {
    const data = req.body;

    res.status(201).json({
        "medoto":"post",
        "dados":data
    });
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    res.status(201).json("Registro excluido");
});

router.patch("/:id", (req, res) => {
    const id = req.params.id;
    res.status(201).json("Registro atualizado com sucesso!!");
});

module.exports = router;

