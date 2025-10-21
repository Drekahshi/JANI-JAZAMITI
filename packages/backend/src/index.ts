import express, { Request, Response } from 'express';

// Placeholder for ADK-TS Agent
const adkAgent = {
  verify: async (submission: any) => {
    console.log('ADK-TS agent verifying submission:', submission);
    return {
      status: 'verified',
      confidence: 0.98,
    };
  },
};

const app = express();
app.use(express.json());

app.post('/api/v1/submissions/verify', async (req: Request, res: Response) => {
  const submission = req.body;
  const result = await adkAgent.verify(submission);
  res.status(200).json(result);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Backend service listening on port ${port}`);
});
