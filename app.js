import express from 'express';
import cors from 'cors';
import appartmentRoutes from './routes/apartment.route.js'
import flatRoutes from './routes/flat.routes.js'
import waterBillRoutes from './routes/waterBill.route.js'

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/apartments', appartmentRoutes);
app.use('/api/flats', flatRoutes);
app.use('/api/waterbills', waterBillRoutes);

app.get('/', (req, res) => {
  res.status(200).send('[SERVER] express server is running');
});


export default app;