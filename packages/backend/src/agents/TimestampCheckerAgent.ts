import { TreeSubmission, ValidationDetail } from '../types/types';

export class TimestampCheckerAgent {
  async check(submission: TreeSubmission): Promise<ValidationDetail> {
    console.log(`[TimestampCheckerAgent] Checking timestamps for submission: ${submission.submissionId}`);
    // Placeholder logic for timestamp validation
    const plantingDate = new Date(submission.treeData.plantingDate);
    const now = new Date();

    if (plantingDate <= now) {
      return {
        status: 'passed',
        confidence: 0.99,
        result: 'Timestamp is valid and not in the future.',
      };
    } else {
      return {
        status: 'failed',
        confidence: 0.99,
        result: 'Planting date cannot be in the future.',
      };
    }
  }
}
