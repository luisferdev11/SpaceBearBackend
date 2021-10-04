import express from 'express';
import { dataset } from './app.js';


const app = express();
const port = 3100;

app.get('/', (req, res) => {
  while (true) {
    res.send(dataset);
  }  
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})