import express from 'express';
import { dataset } from './app.js';

import cors from 'cors';

const app = express();

app.use(cors())

app.get('/', (req, res) => {
    res.send(dataset);
})

app.listen(process.env.PORT || 5000)