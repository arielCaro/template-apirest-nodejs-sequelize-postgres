import { Company } from "../models/company.js";

export async function Create(req, res) {
    try {
        const { Name, Address, ContactPhone, Active, DateCreated, DateModified, UserCreated, UserModifield } = req.body;
        const newCompany = await Company.create({
            Name, Address, ContactPhone, Active, DateCreated, DateModified, UserCreated, UserModifield
        });
        return res.json(newCompany);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export async function GetAll(req, res) {
    try {
        const companies = await Company.findAll({
        attributes: ["Id", "Name", "Address", "ContactPhone", "Active", "DateCreated", "DateModified", "UserCreated", "UserModifield"],
        order: [["id", "DESC"]],
        });
        return res.json(companies);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export async function Update(req, res) {
    const { id } = req.params;
    try {
        const company = await Company.findOne({
        attributes: ["Id", "Name", "Address", "ContactPhone", "Active", "DateCreated", "DateModified", "UserCreated", "UserModifield"],
        where: { id },
        });
        company.set(req.body);
        await company.save();
        return res.json(company);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export async function Delete(req, res) {
    const { id } = req.params;
    try {
        await Company.destroy({
        where: { id },
        });

        return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export async function Get(req, res) {
    const { id } = req.params;
    try {
        const company = await Company.findOne({
        where: { id },
        attributes: ["Id", "Name", "Address", "ContactPhone", "Active", "DateCreated", "DateModified", "UserCreated", "UserModifield"],
        });
        return res.json(company);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}