import express from 'express';
import submissionsRouter from './routes/submissions';

const app = express();
app.use(express.json());

app.use('/api/v1/submissions', submissionsRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Backend service listening on port ${port}`);
});
