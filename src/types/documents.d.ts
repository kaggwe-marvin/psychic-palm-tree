// src/types/document.types.ts
export type DocumentMetadata = {
  id: string;
  studentId: string;
  filename: string;
  originalName: string;
  mimeType: string;
  size: number;
  r2Key: string;
  departmentId: string;
  status: 'pending' | 'approved' | 'rejected';
  comments?: string;
  uploadDate: number;
  lastUpdated: number;
};

export type UploadResult = {
  key: string;
  size: number;
  mimeType: string;
};

export type ValidationResult = {
  isValid: boolean;
  error?: string;
};