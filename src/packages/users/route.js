import express from 'express';
import controler from './controler';
import { isVerified } from "../../middleware/auth";

const router = express.Router();

router.get('/', controler.getOneUser);
router.get('/validate', controler.getOneUser);
router.put('/update', [isVerified], controler.updateOneUser);

export default router;
