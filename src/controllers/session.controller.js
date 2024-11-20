import { Session } from '../models/session.js';
import { User } from '../models/user.js';
import { jwt } from "jsonwebtoken";

const dateNow = Date.now();
const secretKey = "secret";

export async function Auth(req, res) {
    try {
        const { Email, Password, IdApp  } = req.body;
        if (!Email || !Password || !IdApp) {
            return res.status(400).json({ message: "Username, password and Application are required" });
        }
        const user = await User.findOne({
            where: { Email, Password,  IdApp},
        });
        if (!user){
            return res.status(401).json({ message: "Authentication failed" });
        }
        /** Generate Token **/
        const token = jwt.sign({ user }, secretKey, { expiresIn: "1h" });;

        let sessionNew = {
            SessionOn: dateNow,
            SessionOut: token.expired,
            Active: true,
            IdUser: user.Id,
            TokenBearer: token.key,
            AppId: IdApp
        }
        user.password = "";
        /** Create Session **/
        const newSession = await Session.create(sessionNew);
        return res.status(200).json({
            token: token,
            user: user,
            message: "Success",
        });
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

