export type FileValidationConfig = {
  maxSizeBytes: number;
  allowedMimeTypes: string[];
};

export const DEFAULT_CONFIG: FileValidationConfig = {
  maxSizeBytes: 10 * 1024 * 1024, // 10MB
  allowedMimeTypes: [
    'application/pdf',
    'image/jpeg',
    'image/png',
    'image/jpg',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  ]
};
