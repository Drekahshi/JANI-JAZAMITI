import { TreeSubmission, ValidationDetail } from '../types/types';

export class GpsValidatorAgent {
  async validate(submission: TreeSubmission): Promise<ValidationDetail> {
    console.log(`[GpsValidatorAgent] Validating GPS for submission: ${submission.submissionId}`);
    // Placeholder logic for GPS validation
    const { latitude, longitude } = submission.treeData.location;

    if (latitude >= -4.68 && latitude <= 4.62 && longitude >= 33.91 && longitude <= 41.91) {
      return {
        status: 'passed',
        confidence: 0.98,
        result: 'Location within Kenya polygon, bounds correct',
      };
    } else {
      return {
        status: 'failed',
        confidence: 0.99,
        result: 'Location is outside of Kenya bounds.',
      };
    }
  }
}
