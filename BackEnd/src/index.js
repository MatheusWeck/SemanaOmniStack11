const express = require('express'); //chamar o pacote express previamente instalado via npm install express na pasta
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


/**Métodos HTTP:
GET: Buscar uma informação do back-end
POST: Criar uma informação no back-end
PUT: Alterar uma informação no back-end
DELETE: Deletar uma informação no back-end
*/

/**
 *  Tipos de parâmetros:
 * 
 * Query Params : Parâmetros nomeados enviados na rota após o simbolo de "?" (Filtros, paginação)
 * Route Params: parâmetros utilizados para identificar um unico resurso
 * Request Body: Corpo da requisição, utilzado para cirar ou alterar recursos
 */

 /**
  * Banco de Dados: SQL : MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, CouchDB, etc
  */

  /**
   * Driver: SELECT * FROM users
   * Query Builder: table('users').select('*').where()
   */

app.listen(3333); //acessar a aplicação via web localhost:3333

