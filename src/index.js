const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Métodos HTTP:
 *
 * GET: Buscar/Listar uma informação do back-end
 * POST: Criar uma informação do back-end
 * PUT: Alterar uma informação do back-end
 * DELETE: Deletar uma informação do back-end
 */

/**
 * Tipos de parâmetros:
 *
 * Query: Parâmetros nomeados enviados na rota após "?" (filtros, paginação)
 * Route: Parâmetros utilizados para identificar recursos
 * Request body: Corpo da requisição, usado para criar ou alterar
 */

/**
 * Banco de dados:
 *
 * SQL: MySQL, SQLite, PostgreSQL
 * NoSQL: MongoDB, CouchDB
 */

app.listen(3333);
