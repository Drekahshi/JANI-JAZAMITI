import { Router, Request, Response } from 'express';
import { JaniVerifierAgent } from '../agents/JaniVerifierAgent';
import { TreeSubmission } from '../types/types';

const router = Router();
const verifierAgent = new JaniVerifierAgent();

router.post('/verify', async (req: Request, res: Response) => {
  const submission: TreeSubmission = req.body;

  if (!submission || !submission.submissionId) {
    return res.status(400).json({ error: 'Invalid submission format' });
  }

  try {
    const result = await verifierAgent.verify(submission);
    res.status(200).json(result);
  } catch (error) {
    console.error('Error during verification:', error);
    res.status(500).json({ error: 'An internal error occurred during verification.' });
  }
});

export default router;
