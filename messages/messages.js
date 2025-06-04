
import express from 'express';

const router = express.Router();

router.route('/')
    .get((req, res) => {
        res.send("messages working");
    })
    .post((req, res) => {
        console.log(req.body);
        res.send(true);
    })
    .delete((req, res) => {

    });

export default router;