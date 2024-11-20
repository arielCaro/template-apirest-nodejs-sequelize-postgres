import { Session } from '../models/session.js';
import { User } from '../models/user.js';

var dateNow = Date.now();

export async function Auth(req, res) {
    try {
        const { Email, Password, IdApp  } = req.body;
        const user = await User.findOne({
            where: { Email, Password },
        });
        /** Generate Token **/
        const token = "";


        let sessionNew = {
            SessionOn: dateNow,
            SessionOut: token.expired,
            Active: true,
            IdUser: user.Id,
            TokenBearer: token.key,
            AppId: IdApp
        }

        /** Create Session **/
        const newSession = Session.create(sessionNew);
        res.status(201).json(newSession);
    } catch (error) {
        return res.status(500).json({
            message: error.message
        }); 
    }
}

export async function Create(req, res) {
    try {
        //falta generar Token bearer y asignar valores a las propiedades Sessionon y SessionOut

        const { SessionOn, SessionOut, Active, IdUser, TokenBearer, AppId } = req.body;
        const newSession = Session.create({
            SessionOn, SessionOut, Active, IdUser, TokenBearer, AppId
        });
        return res.status(201).json(newSession);
    } catch (error) {
        return res.status(500).json({
            message: error.message
        }); 
    }
}

export async function Update(req, res) {
    try {

    } catch (error) {
        return res.status(500).json({
            message: error.message
        }); 
    }
}

export async function Delete(req, res) {
    try {

    } catch (error) {
        return res.status(500).json({
            message: error.message
        }); 
    }
}

export async function Get(req, res) {
    const { id } = req.param;
    try {

    } catch (error) {
        return res.status(500).json({
            message: error.message
        }); 
    }
}