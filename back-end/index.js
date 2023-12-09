import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { DetailsModel } from './models/Details.js';

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("Database connection String");

app.post('/', (req, res) => {
    DetailsModel.create(req.body)
        .then(details => res.json(details))
        .catch(error => console.error(error));
});

app.post('/login', (req, res) => {
    const { email, password, role } = req.body;

    DetailsModel.findOne({ email: email, role: role })
        .then(details => {
            if (details) {
                if (details.password === password) {
                    res.json({ message: `${role} Login Success`, user: details });
                } else {
                    res.json({ message: `${role}: The password is incorrect` });
                }
            } else {
                res.json({ message: `No ${role} record` });
            }
        })
        .catch(error => console.error(error));
});

app.listen(3001, () => {
    console.log("Server is running");
});

