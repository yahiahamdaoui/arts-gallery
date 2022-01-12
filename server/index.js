import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import paintingsRoutes from './routes/paintings.routes.js';

const app = express();

app.use(express.json);
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/api', paintingsRoutes);

const port = 8000;
app.listen(port, () => console.log(`Server Running on Port: ${port}`));

export default app;