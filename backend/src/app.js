import express from 'express';
import aiRoutes from './routes/ai.routes.js';
import cors from 'cors';

const app = express();

app.use(express.json());

// ✅ Configure CORS properly
const corsOptions = {
  origin: 'https://a-codesense.onrender.com', // ✅ Allow frontend domain only
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'],
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send('Hello, AI CodeSense is running!');
});

app.use('/ai', aiRoutes);

export default app;
