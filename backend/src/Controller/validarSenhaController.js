const crypto = require('crypto');
const connection = require('../database/connection');
const nodemailer = require('nodemailer');

const enviarMail = nodemailer.createTransport({
  service: "gmail.com",
  auth: {
    user: "maisonarnoboys@gmail.com",
    pass: "21arnoboys@"
  }
});

module.exports = {
  async index(Resquest, Response) {
    const valida = await connection('recupera').select('*');

    return Response.json(valida);
  },

  async create(Resquest, Response) {
    const { email } = Resquest.body;
    const validacaoDeSenhaToken = crypto.randomBytes(4).toString('HEX');
    const usuario = await connection('cadastro').where('email', email).select('nome').first();
    const verificarEmail = await connection('cadastro').where('email', email).select('ativo').first();
    const valido = await connection('recupera').where('email_recuperador', email).select('data').first();


    if (!verificarEmail && !valido) {
      return Response.status(401).json({ error: 'Email não existe' });
    }
    else {
      if (verificarEmail.ativo == true) {
        const emailValidacao = {
          from: 'maisonarnoboys@gmail.com',
          to: email,
          subject: 'O Token da validação ',
          text: 'olá ' + usuario.nome + ', tudo bem? \n' +
            ' Segue  a Token : ' + validacaoDeSenhaToken +
            '\n\n Não é necessário responder o e-mail.',
        }
        enviarMail.sendMail(emailValidacao, function (error, info) {
          if (error) {
            console.log(error);
          } else {
            return validacaoDeSenhaToken;
          }
        });
      }
      else {
        return Response.status(400).json("Fudeu");
      }
    }

    if(validacaoDeSenhaToken != null){
      const dataRegistro = new Date();
      await connection('recupera').where('email_recuperador', email)
      .update('validacaoDeSenha', validacaoDeSenhaToken);
      await connection('recupera').where('email_recuperador', email)
      .update('data', dataRegistro.toString());

      console.log(validacaoDeSenhaToken);

      return Response.status(200).json("Show Ano deu certo novamente");
    }
  },

  async recreate(Resquest, Response) {
    const { tokenSenha } = Resquest.body;
    const validacaoDeToken = await connection('recupera').where('validacaoDeSenha', tokenSenha).select('email_recuperador').first();
    if (validacaoDeToken) {
      return Response.status(200).json('Teste : Ok');
    }
    else {
      return Response.status(401).json({ error: 'Validando teste' });
    }
  }
}