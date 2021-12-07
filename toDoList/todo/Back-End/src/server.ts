import express from 'express';
import cors from 'cors';

import routes from './routes';

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

app.use(routes);

app.listen(port, () => console.log(`Hello na port ${port}`));
