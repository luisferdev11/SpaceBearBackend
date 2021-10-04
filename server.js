import express from 'express';
import { dataset } from './app.js';


const app = express();

app.get('/', (req, res) => {
    res.send(dataset);
})

app.listen(process.env.PORT || 5000)
console.log(dataset);