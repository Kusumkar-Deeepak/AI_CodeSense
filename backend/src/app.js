import express from 'express';
import aiRoutes from './routes/ai.routes.js';
import cors from 'cors'

const app = express();

app.use(express.json())
app.use(cors())
app.get('/', (req, res) => {
    res.send('hello world');
});

app.use('/ai', aiRoutes);

export default app;
