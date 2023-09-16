import express, { Request, Response } from "express";
import { getAll, getOne, createOne, updateOne, deleteOne } from "../controllers/userController";

const router = express.Router();

router.get('/api/getAll', getAll);
router.get('/api/getOne/:id', getOne)
router.post('/api/createOne/:id', createOne);
router.put('/api/update/:id', updateOne);
router.delete('/api/delete/:id', deleteOne);

export { router as userRouter };

