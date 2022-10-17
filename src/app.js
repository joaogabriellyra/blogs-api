const express = require('express');
const routes = require('./routes');
const validateLoginFields = require('./middlewares/validateLoginFields');
const validateCreateUsersFields = require('./middlewares/validateCreateUsersField');
const validateToken = require('./middlewares/validateToken');
const validatePostUpdateFields = require('./middlewares/validatePostUpdateFields');
const validateUserDelete = require('./middlewares/validateUserDelete');
// const validateCategories = require('./middlewares/validateCategories');
// ...

const app = express();

app.use(express.json());

const apiRoutes = express.Router();

apiRoutes.delete('/post/:id', validateToken, validateUserDelete, routes.deletePost);
apiRoutes.put('/post/:id', validateToken, validatePostUpdateFields, routes.updatePost);
apiRoutes.get('/post/:id', validateToken, routes.getPostById);
apiRoutes.get('/post', validateToken, routes.getPosts);
apiRoutes.post('/post', validateToken, routes.createPost);
apiRoutes.post('/categories', validateToken, routes.createCategories);
apiRoutes.get('/categories', validateToken, routes.getCategories);
apiRoutes.post('/login', validateLoginFields, routes.login);
apiRoutes.post('/user', validateCreateUsersFields, routes.createUser);
apiRoutes.get('/user', validateToken, routes.getUsers);
apiRoutes.get('/user/:id', validateToken, routes.getUserById);

app.use(apiRoutes);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
