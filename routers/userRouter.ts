import { Router } from "express";
import { body, param } from "express-validator";

const router = Router();

router.route('/')
.post(
    body('idToken').notEmpty().isJWT()
);

router.route('/:id')
.all(
    param('id').isUUID()
)
.put(
    body('idToken').notEmpty().isJWT()
)
.patch(
    body('idToken').notEmpty().isJWT()
)
.delete(
    body('idToken').notEmpty().isJWT()
);

export default router;