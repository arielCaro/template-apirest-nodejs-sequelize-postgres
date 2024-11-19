import { Role } from "../models/role.js";

export async function Create(req, res) {
    try{
        const { Name, Description, Active } = req.body;
        const newRole = await Role.create({
            Name, Description, Active
        });
        res.json(newRole);
    } catch(error){
        return res.status(500).json({ message: error.message })
    }
}

export async function GetAll(req, resp) {
    try {
        const roles = await Role.findAll({
            attributes: ["Id", "Name", "Description", "Active"],
            order: [["id", "DESC"]],
        });
        res.json(roles)
    } catch(error){
        return res.status(500).json({message: error.message});
    }
}

export async function Update(req,res){
    const { id } = req.param;
    try {
        const role = await Role.findOne({
            attribute: ["Id", "Name", "Description", "Active"],
            where: { id }
        });
        role.set(req.body);
        await role.save();
        res.json(role);
    } catch(error){
        return res.status(500).json({
            message: error.message
        });
    }
}

export async function Delete(req, res) {
    const { id } = req.param;
    try {
        await Role.Destroy({
            where: { id },
        });
        return res.sendStatus(204);
    } catch(error){
        return res.status(500).json({
            message: error.message
        });
    }
}

export async function Get(req,res) {
    const { id } = req.param;
    try{
        const role = await Role.findOne({
            where: { id },
            attribute: ["Id", "Name", "Description", "Active"]
        });
        res.json(role);
    } catch(error){
        return res.status(500).json({
            message: error.message
        });
    }
}