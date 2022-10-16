const express = require('express');
const routes = require('./routes');
const validateLoginFields = require('./middlewares/validateLoginFields');
// ...

const app = express();

app.use(express.json());

const apiRoutes = express.Router();

apiRoutes.post('/login', validateLoginFields, routes.login);

app.use(apiRoutes);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
