import { RequestHandler } from "express";
import User from "../models/user";

const getAll : RequestHandler = async (req, res, next) => {
    const allUsers = await User.findAll();
    return res
        .status(200)
        .json({message: "Liste des utilisateurs", data: allUsers});
};

const getOne : RequestHandler = async (req, res, next) => {
    const {id } = req.params;
    const oneUser = await User.findByPk(id);
    return res
        .status(200)
        .json({message: "Utilisateur", data: oneUser});
};

const createOne : RequestHandler = async (req, res, next) => {
    const createdUser = await User.create(req.body);
    return res
        .status(201)
        .json({message: "Utilisateur céé avec succès !", data: createdUser});
};

const updateOne : RequestHandler = async (req, res, next) => {
    const {id } = req.params;
    const updatedUser = await User.update(req.body, {where: {id}});
    return res
        .status(200)
        .json({message: "Utilisateur modifié avec succès !", data: updatedUser});
};

const deleteOne : RequestHandler = async (req, res, next) => {
    // const {id } = req.params;
    // const deletedUser = User|null = await User.findByPk(id);

    const deletedUser = await User.destroy({where: {id: req.params.id}});
    return res
        .status(200)
        .json({message: "Utilisateur supprimé avec succès !", data: deletedUser});
};

export { getAll, getOne, createOne, updateOne, deleteOne };