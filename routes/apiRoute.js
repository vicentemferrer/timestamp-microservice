import { Router } from "express";

import { getTimestamp } from "../controllers/apiController.js";

const router = new Router();

router.get('/hello', async (req, res) => {
    res.json({ greeting: 'Hello API user!' });
})

router.get('/:date?', getTimestamp);

export default router