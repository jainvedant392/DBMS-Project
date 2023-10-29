import express from 'express';
// import axios from 'axios';
import cors from 'cors';
const app = express();
app.listen(3000, () => {
  console.log('Server is running');
});
app.use(cors());
const a = 13;
app.get('', (req, resp) => {
  // resp.send(a.toString());
  resp.json(a);
});
