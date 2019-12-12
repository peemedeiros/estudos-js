const express = require('express');
const router = express.Router();


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

