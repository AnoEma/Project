const express = require('express');


const cadastroController = require('./Controller/cadastroController');
const loginController = require('./Controller/loginController');
const validacaoController = require('./Controller/validacaoController');

const usuarioCadastroController = require('./Controller/usuarioCadastroController');
const loginUsuarioController = require('./Controller/loginUsuarioController');

const liberarAdminController = require('./Controller/liberarAdminController');

const pedidoController = require('./Controller/pedidoController');

const facaPedidoController = require('./Controller/facaPedidoController');

const esquecerSenhaController = require('./Controller/esquecerSenhaController');

const alterarSenhaController = require('./Controller/alterarSenhaController');

const validarSenhaController = require('./Controller/validarSenhaController');

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

routes.get('/ver-pedido', pedidoController.index);
routes.post('/pedido', pedidoController.create);

routes.post('/faca-pedido', facaPedidoController.create);

routes.post('/esqueceu-senha', esquecerSenhaController.create);

routes.post('/esquecer', validarSenhaController.create);
routes.post('/validacao', validarSenhaController.recreate);
routes.get('/esquece', validarSenhaController.index);

module.exports = routes;