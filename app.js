import express from 'express';
import cors from 'cors';
import appartmentRoutes from './routes/apartment.route.js'

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/apartments', appartmentRoutes);

app.get('/', (req, res) => {
  res.status(200).send('[SERVER] express server is running');
});


export default app;