import { User } from "../models/user.js";

const attrib = [ "id", "name", "lastName", "email",
    "password", "active", "dateCreated",
    "dateModified", "idRole", "idCompany", "phone",
    "phoneMobile", "codePhoneCountry" ]

export async function Create(req, res) {
    try {
        const { Name, LastName, Email,
                Password, Active, DateCreated,
                DateModified, IdRole, IdCompany, Phone,
                PhoneMobile, CodePhoneCountry } = req.param;
        const newUser = await User.Create({
            Name, LastName, Email,
                Password, Active, DateCreated,
                DateModified, IdRole, IdCompany, Phone,
                PhoneMobile, CodePhoneCountry
        })
        return res.status(200).json(newUser);
    } catch(error){
        return res.status(500).json({
            message: error.message
        });
    }
}

export async function Update(req, res) {
    const { id } = req.param;
    try {
        const user = await User.findOne({
            attribute: attrib,
            where: { id },
        });
        user.set(req.body);
        await user.save();
        return res.status(200).json(user);
    } catch(error){
        return res.status(500).json({
            message: error.message
        });
    }
}

export async function Get(req, res) {
    const { id } = req.param;
    try {
        const user = await User.findOne({
            attribute: attrib,
            where: { id },
        });
        return res.status(200).json(user);
    } catch(error){
        return res.status(500).json({
            message: error.message
        });
    }
}

export async function GetAll(req, res) {
    try {
        const users = await User.findAll({
            attribute: attrib,
            order: [["Id", "DESC"]],
        });
        return res.status(200).json(users);
    } catch(error){
        return res.status(500).json({
            message: error.message
        });
    }
}

export async function Delete(req, res) {
    const { id } = req.param;
    try {
        await User.destroy({
            where: { id },
        });
        res.sendStatus(204);
    } catch(error){
        return res.status(500).json({
            message: error.message
        });
    }
}