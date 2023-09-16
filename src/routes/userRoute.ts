import express, { Request, Response } from "express";
import { getAll, getOne, createOne, updateOne, deleteOne } from "../controllers/userController";

const router = express.Router();

router.get('/getAll', getAll);
router.get('getOne/:id', getOne)
router.post('createOne/:id', createOne);
router.put('update/:id', updateOne);
router.delete('delete/:id', deleteOne);

export { router as userRouter };

