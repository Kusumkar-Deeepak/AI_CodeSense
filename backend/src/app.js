import express from 'express';
import aiRoutes from './routes/ai.routes.js';
import cors from 'cors';

const app = express();

app.use(express.json());

// ✅ Configure CORS Properly
const corsOptions = {
  origin: 'https://a-codesense.onrender.com', // ✅ Allow frontend only
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true, // ✅ Allows cookies & session headers
};

app.use(cors(corsOptions));

// ✅ Handle Preflight (OPTIONS) Requests
app.options('*', cors(corsOptions));

app.get('/', (req, res) => {
  res.send('Hello, AI CodeSense Backend is Running! 🚀');
});

app.use('/ai', aiRoutes);

export default app;
