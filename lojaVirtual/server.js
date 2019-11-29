const express = require ('express');
// const bodyParser = require ('body-parser');

const app = express();
app.use(express.json());

const routerProdutos = require('./router/produtos');
const routerClientes = require('./router/clientes');

//está fazendo uma requisição ao servidos na raiz e nos retorna a (RES) resposta 
app.get( '/', ( req, res ) => res.json({
                                        status: "ok", 
                                        msg:"sevidor API - Loja" 
                                        }));

// app.get('/produtos', (req, res) => res.json({
//                                             "status": "ok",
//                                             "data":bd
//                                             }));

app.use('/produtos', routerProdutos);
app.use('/clientes', routerClientes);

// app.get('/clientes', (req, res) => res.json({
//                                             "status":"ok",
//                                             "data":clientes
//                                              }));


// app.get('/produtos/:id', (req, res) => {
//     const id = req.params.id;
//                                         res.json({  "status": "ok",
//                                                     "data":bd[id - 1]
//                                                 });
//                                         });

// app.get('/clientes/:id', (req, res) => {
//     const id = req.params.id;
//     res.json({
//         "status":"ok",
//         "data":clientes[id - 1]
//     });
// });

app.listen( 3000, () => console.log("Servidor Node") );

