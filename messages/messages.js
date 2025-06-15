
import express from 'express';
import { Firestore } from '@google-cloud/firestore';
import { body, matchedData, validationResult } from 'express-validator';

const router = express.Router();
const db = new Firestore({
    databaseId: "contact-messages",
});

function emailChain() {
    return body('email').notEmpty().escape().isEmail();
}

function nameChain() {
    return body('name').notEmpty().escape();
}

function textChain() {
    return body(['company', 'message']).escape();
}

function xssIdent(name, email, company, message) {
    return name.includes("&lt;script&gt;") ||
        email.includes("&lt;script&gt;") ||
        company.includes("&lt;script&gt;") ||
        message.includes("&lt;script&gt;");
}

router.route('/')
    .get((req, res) => {
        res.send("messages working");
    })
    .post(nameChain(), emailChain(), textChain(), async (req, res) => {
        const result = validationResult(req);
        const data = matchedData(req);

        if (!result.isEmpty()) {
            res.status(400).json({id: null, addSuccess: false});
            return;
        } else if (xssIdent(data.name, data.email, data.company, data.message)) {
            res.status(418).json({id: null, addSuccess: false});
            return;
        }

        try {
            let name = data.name;
            let email = data.email;
            let company = data.company ?? "no-company";
            let message = data.message ?? "no-message";
            
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