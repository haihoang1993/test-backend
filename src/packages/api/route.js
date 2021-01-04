import express from 'express';
import * as  controler from './controler';

const router = express.Router();

router.get('/data/push', controler.pushTest);
router.get('/token/', controler.getToken);
router.get('/token/db', controler.getTokenDB);
router.get('/token/data', controler.getData);
router.get('/token/chart', controler.getMakertCharToken);
router.get('/token/hour', controler.getListPriceHour);

export default router;
