import { Router, static as static_ } from "express";

const { dirname } = import.meta

const router = new Router();

router.use(static_('public'));

router.get('/css', static_(`${dirname}\\public\\css`));
router.get('/js', static_(`${dirname}\\public\\js`));

export default router;