const express = require('express');


const cadastroController = require('./Controller/cadastroController');
const loginController = require('./Controller/loginController');
const validacaoController = require('./Controller/validacaoController');

const usuarioCadastroController = require('./Controller/usuarioCadastroController');
const loginUsuarioController = require('./Controller/loginUsuarioController');

const liberarAdminController = require('./Controller/liberarAdminController');

const esquecerSenhaController = require('./Controller/esquecerSenhaController');

const alterarSenhaController = require('./Controller/alterarSenhaController');

const validarSenhaController = require('./Controller/validarSenhaController');

const cursoInicioController = require('./Controller/Negocio/cursoInicio');

const subcategoriaController = require('./Controller/Negocio/subcategoria');

const cursoController = require('./Controller/Negocio/curso');
const tempoVerboController = require('./Controller/Negocio/negocio');

const routes = express.Router();

routes.get('/usuario', usuarioCadastroController.index);
routes.post('/cadastro-usuario', usuarioCadastroController.create);

routes.post('/login-cliente', loginController.create);
routes.post('/login-usuario', loginUsuarioController.create);

routes.post('/validacao-cliente', validacaoController.create);

routes.get('/cliente', cadastroController.index);
routes.post('/cadastro-cliente', cadastroController.create);

routes.post('/acesso-admin', liberarAdminController.create);
routes.post('/alterar-senha', alterarSenhaController.create);

routes.post('/novo-senha', esquecerSenhaController.create);

routes.post('/esquecer-senha', validarSenhaController.create);
routes.post('/validacao', validarSenhaController.recreate);
routes.get('/esquece', validarSenhaController.index);

routes.get('/inicio', cursoInicioController.index);
routes.post('/cadastro-curso', cursoInicioController.create);
routes.put('/delete', cursoInicioController.delete);

routes.get('/cursos', subcategoriaController.index);
routes.get('/curso/:cursoId', subcategoriaController.listaSubcategoria);
routes.post('/adicao-curso', subcategoriaController.create);
routes.put('/deleta-curso', subcategoriaController.delete);

routes.get('/iniciando-curso', cursoController.index);
routes.get('/iniciando/:subCategoriaId', cursoController.licaoGrupo);
routes.post('/create-curso', cursoController.create);
routes.put('/deleta-material',cursoController.delete);

routes.get('/tempo-do-verbo', tempoVerboController.index);
routes.get('/tempo-verbo/:verboId', tempoVerboController.listeTempoDoVerbo);
routes.post('/adicao-tempo', tempoVerboController.createVerbo);

module.exports = routes;