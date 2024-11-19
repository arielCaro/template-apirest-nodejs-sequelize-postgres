import { User } from "../models/user.js";

export async function Create(req, res) {
    try {
        const { id } = req.param;
        res.json();
    } catch(error){
        return res.status(500).json({
            message: error.message
        });
    }
}

export async function Update(req, res) {
    const { id } = req.param;
    try {
        res.json();
    } catch(error){
        return res.status(500).json({
            message: error.message
        });
    }
}

export async function Get(req, res) {
    const { id } = req.param;
    try {
        res.json();
    } catch(error){
        return res.status(500).json({
            message: error.message
        });
    }
}

export async function GetAll(req, res) {
    try {
        res.json();
    } catch(error){
        return res.status(500).json({
            message: error.message
        });
    }
}

export async function Delete(req, res) {
    const { id } = req.param;
    try {
        res.json();
    } catch(error){
        return res.status(500).json({
            message: error.message
        });
    }
}