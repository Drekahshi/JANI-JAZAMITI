import { TreeSubmission, ValidationDetail } from '../types/types';

export class ImageAnalyzerAgent {
  async analyze(submission: TreeSubmission): Promise<ValidationDetail> {
    console.log(`[ImageAnalyzerAgent] Analyzing images for submission: ${submission.submissionId}`);
    // Placeholder logic for image analysis
    const hasImages = submission.images && submission.images.length > 0;

    if (hasImages) {
      return {
        status: 'passed',
        confidence: 0.96,
        result: 'Healthy sapling detected, no manipulation signs',
      };
    } else {
      return {
        status: 'failed',
        confidence: 0.9,
        result: 'No images found in submission.',
      };
    }
  }
}
