require('dotenv').config();
import connectToMoongo from './src/configs/moongose';
import bodyParser from 'body-parser';
import routes from './routes';
import express from 'express';
import cors from 'cors';

const app = express();
const port = 8000;

app.use(cors({
  origin:process.env.CLIENT_URL!,
  credentials:true
}));
app.use(bodyParser.json());
app.use(routes);

app.get('/', (req, res) => {
  res.send('hello world');
});

!(async function config() {
  try {
    const message = `The server start in the port ${port}`;
    await connectToMoongo();
    app.listen(port, () => console.log(message));
  }
  catch(err:unknown) {
    console.log(err);
  }
})(); 