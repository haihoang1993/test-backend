import express from 'express';
import controler from './controler';

const router = express.Router();

router.get('/', controler.realtime);

export default router;
