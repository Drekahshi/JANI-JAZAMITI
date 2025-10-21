export interface TreeLocation {
  latitude: number;
  longitude: number;
  accuracy: number;
  altitude: number;
}

export interface TreeImage {
  url: string;
  timestamp: string;
  type: 'full_tree' | 'close_up' | 'surroundings';
}

export interface Validator {
  name: string;
  cfaId: string;
  biometricHash: string;
}

export interface TreeData {
  species: string;
  plantingDate: string;
  estimatedHeight: number;
  location: TreeLocation;
}

export interface TreeSubmission {
  userId: string;
  submissionId: string;
  treeData: TreeData;
  images: TreeImage[];
  validator: Validator;
}

export interface ValidationDetail {
  status: 'passed' | 'failed' | 'pending';
  confidence: number;
  result: string;
}

export interface FraudDetectionResult {
  status: 'passed' | 'failed' | 'pending';
  riskScore: number;
  flags: string[];
}

export interface VerificationDetails {
  gpsValidation: ValidationDetail;
  imageAnalysis: ValidationDetail;
  fraudDetection: FraudDetectionResult;
}

export interface VerificationResult {
  submissionId: string;
  status: 'verified' | 'rejected' | 'pending_review';
  verificationDetails: VerificationDetails;
  overallConfidence: number;
  decision: 'APPROVED' | 'REJECTED' | 'MANUAL_REVIEW';
  llmConsensus: string;
  tokensMinted: number;
  onChainHash: string;
  timestamp: string;
}
