/**
 * File type definitions for document upload and file handling
 */

/**
 * Represents a collection of files selected by the user or from a drop operation.
 * This is a typed version of the browser's native FileList interface.
 */
export interface FileList {
  readonly length: number;
  item(index: number): File | null;
  [index: number]: File;
}

/**
 * Represents a document or file uploaded by a user
 */
export interface UploadedDocument {
  id: string;
  name: string;
  path?: string;
  uploadDate: string;
  status: 'pending' | 'approved' | 'rejected';
  fileSize?: number;
  fileType?: string;
}

/**
 * Response from file upload operation
 */
export interface FileUploadResponse {
  success: boolean;
  documentId?: string;
  error?: string;
  message?: string;
}