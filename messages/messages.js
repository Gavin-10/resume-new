
import express from 'express';
import { Firestore } from '@google-cloud/firestore';

const router = express.Router();
const db = new Firestore({
    projectId: process.env.PROJECT_ID,
    keyFilename: process.env.KEY_FILE,
    databaseId: "contact-messages",
});

router.route('/')
    .get((req, res) => {
        res.send("messages working");
    })
    .post(async (req, res) => {
        console.log(req.body);

        try {
            let name = req.body.name ?? "no-name";
            let email = req.body.email ?? "no-email";
            let company = req.body.company ?? "no-company";
            let message = req.body.message ?? "no-message";
            
            const docRef = await db.collection('messages').add({
                name: name,
                email: email,
                company: company,
                message: message,
                timestamp: Firestore.FieldValue.serverTimestamp(),
            });

            res.status(201).json({id: docRef.id, addSuccess: true});
        } catch (error) {
            console.log(error);
            res.status(500).json({id: null, addSuccess: false});
        }
    })
    .delete((req, res) => {

    });

export default router;