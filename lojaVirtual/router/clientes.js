const express = require('express');
const router = express.Router();
const conn = require('../connection');

const clientes = [{
    "id":"1",
    "nome":"Pedro",
    "idade":"20"
} , {
    "id":"2",
    "nome":"Medeiros",
    "quantidade":"20"
}]

router.get('/', (req, res) => {
    const sql = "SELECT * FROM clientes";
    conn.query(sql, (error, result) => {
        if(error){
            res.json(error);
        }else{
            res.json(result);
        }
    });
});

router.post('/', (req, res) => {
    const sql = "INSERT INTO clientes (nome, idade) values ('Jhon', 22)";

    conn.query(sql, (error, result) => {
        if(error){
            res.json(error);
        }else{
            res.json(result);
        }
    });
});

router.get('/:id' , (req, res) => {
    const id = req.params.id;
    res.json({
        "status":"ok",
        "data":clientes[id - 1]
    });
});

module.exports = router;