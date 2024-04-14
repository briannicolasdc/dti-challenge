import express from 'express'
import cors from 'cors'
import getBestPetShop from './app.js'


const app = express()
const port = 5000
app.use(cors());
app.use(express.json());

app.post('/api/sendData', (req, res) => {
  const inputData = req.body.inputData;
  const bestPetShop = getBestPetShop(inputData); 
  res.send(bestPetShop);
});


app.listen(port, () => console.log('listening on port ' + port));
