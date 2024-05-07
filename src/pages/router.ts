import Express from "express";
import chat from "./chat";
import index from "./index";

const router = Express.Router();

router.get('/', index);
router.get('/chat', chat);


export default router;