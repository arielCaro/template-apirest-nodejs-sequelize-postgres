import { Application } from "../models/application.js";

export async function Create(req, res){
    try {
        const { Name, Active } = req.body;
        const newApp = await Application.create({
            Name, Active
        });
        return res.status(201).json(newApp);
    } catch(error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

export async function Update(req, res){
    const { id } = req.param;
    try {
        const app = await Application.findOne({
            attributes: ["Id", "Name", "Active"],
            where: { id },
        });
        app.set(req.body);
        await app.save();
        return res.status(200).jason(app);
    } catch(error){
        return res.status(500).json({
            message: error.message
        })
    }
}

export async function Get(req, res){
    const { id } = req.param;
    try {
        const app = await Application.findOne({
            attributes: ["Id", "Name", "Active"],
            where: { id },
        });
        return res.status(200).json(app);
    } catch(error){
        return res.status(500).json({
            message: error.message
        })
    }
}

export async function GetAll(req, res){
    try {
        const apps = await Company.findAll({
                attributes: ["Id", "Name", "Active"],
                order: [["id", "DESC"]],
                });
        return res.status(200).json(apps);
    } catch(error){
        return res.status(500).json({
            message: error.message
        })
    }
}

export async function Delete(req, res){
    try {
        await Application.destroy({
            where: { id },
        });
        return res.sendStatus(204);
    } catch(error){
        return res.status(500).json({
            message: error.message
        })
    }
}