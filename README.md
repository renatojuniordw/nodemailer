# Nodemailer

*Nodemailer é um módulo do Node.js que permite envio de e-mail utilizando JavaScript no lado do servidor. *

Api criada para realizar envio de e-mail atráves do Nodemailer, um modulo do node.js.

Para executar a API execute o seguinte comando:

```
npm install
```

Execute o aplicativo com o seguinte comando:

```
node app.js
```

Em seguida, carregue http://localhost:3000/ em um navegador de sua preferência.

### Configurações

##### Servidor SMTP Gmail
Para que possamos utilizar os serviços do servidor SMTP do gmail, precisa permitir acesso para aplicativos menos seguros.

[Ativar aplicativos menos seguros](https://myaccount.google.com/u/0/lesssecureapps?pli=1 "Ativar aplicativos menos seguros")

##### Dados do servidor SMTP
No projeto, acesse environments.js, em `src > environments > environments.js`e adicione o seu usuário e senha do seu gmail, no qual você permitiu acesso para aplicativos menos seguros.

```json
configSMTP: {
        host: 'smtp.gmail.com',
        service: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'seuemail@gmail.com',
            pass: 'suasenha'
        }
    }
```
Após tudo configurado, execute a rota `http://localhost:3000/email/send` enviando o seguinte body:

```json
{
	"from": "from@example.com",
	"to": "to@example.com",
	"subject": "[nodemailer] Teste de e-mail",
	"text": "Olá, estou te enviando esse e-mail através de um módulo do Node.js."
}
```
