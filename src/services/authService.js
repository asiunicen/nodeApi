//import Personal from './../models/authModel.js';
import md5 from 'md5'; //var md5 = require('md5');
import jwt from 'jsonwebtoken';
const { Personal } = require('./../models/authModel');
const config = require('./../config/config');

//datos de users pass en json
export const logins = async (datos) => {
    const userFound = await Personal.findOne({
        where: { 
            login: datos.login
        }, 
        raw: true
    })

    if (!userFound) {
        throw new Error('User not found');
    }
    //convertimos, obtenemos y comparamos la pass
    const dataFromLogin = md5(datos.pass); //console.log(dataFromLogin);
    const userPass = userFound.pass; //console.log(userPass);
    if(dataFromLogin != userPass){
        throw new Error('Incorrect password');   
    }
    // generation of token
    const user = {
        login: userFound.login,
        id: userFound.id_datos_personal,
        time: new Date()
    }
    var token = jwt.sign({user}, config.secretCode, {expiresIn: config.expirationTime });
    
    //return userFound ;
    return { token, user };
}

/* module.exports = {
    logins
} */