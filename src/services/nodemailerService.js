const nodemailer = require('nodemailer');
const environment = require('../environments/environments');

const configSMTP = nodemailer.createTransport(environment.configSMTP);

const sendemail = (configEmail) => {
    configSMTP.sendMail(configEmail, (error) => {
        if (error) {
            console.log(error)
        } else {
            console.log('E-mail enviado com sucesso!')
        }
    });
}

module.exports = sendemail;