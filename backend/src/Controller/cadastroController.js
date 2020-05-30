const crypto = require('crypto');
const connection = require('../database/connection');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');


const enviarMail = nodemailer.createTransport({
    // host: "smtp.mailtrap.io",
    service: "gmail.com",
    // port: 25,
    auth: {
      user: "maisonarnoboys@gmail.com",
      pass: "********"
    }
  });

   
module.exports = {
    async index(Resquest, Response){
        const cadastros = await connection('cadastro').select('*');

        return Response.json(cadastros);
    },

    async create(Resquest, Response){
        const {nome, sobreNome, email, aceitarReceberEmail, celular, cidade, uf} = Resquest.body;

        const saltRounds = 10
        const validarCadastro = crypto.randomBytes(4).toString('HEX');
        const salt = bcrypt.genSaltSync(saltRounds);
        const senha = bcrypt.hashSync(Resquest.body.senha, salt);
        const ativo = false;
        const emailExiste = await connection('cadastro').where('email', email).select('nome').first();
        const celularExiste = await connection('cadastro').where('celular', celular).select('nome').first();
       

        if(emailExiste == null && celularExiste == null){
            await connection('cadastro').insert({
                nome,
                sobreNome,
                email,
                celular,
                cidade,
                uf,
                senha,
                aceitarReceberEmail,
                validarCadastro,
                ativo
            });

            const email_recuperador = email;
               if(email_recuperador != null){
                await connection('recupera').insert({email_recuperador});
               }
             
            const emailValidacao = {
            from: 'maisonarnoboys@gmail.com',
            to: email,
            subject: 'A validação da criação de conta no maison',
            text: 'olá ' + nome + ', tudo bem? \n'+
                'Seja bem vindo a nossa empresa\n'+ 
                'Para validar o seu login, nós enviamos esse e-mail com o Token de validação do seu cadastro.\n'
                +' Segue  a Token : ' + validarCadastro +
                '\n\n Não é necessário responder o e-mail.',            
         }
         enviarMail.sendMail(emailValidacao, function(error, info){
                    if (error) {
                        console.log(error);
                      } else {
                        return Response.json({nome});
                      }
                });
        }
        else{
            if(emailExiste != null && celularExiste != null){
                return Response.status(401).json({ error: 'Email e Celular já existe'});              
            }
            if(celularExiste != null){
                return Response.status(401).json({ error: 'Celular já existe'});
            }
            if(emailExiste != null){
                return Response.status(401).json({ error: 'Email já existe'});
            }
        }     
    }
};