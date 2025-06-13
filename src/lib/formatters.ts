// Utility for showing document size in human-readable format
// src/utils/formatters.ts
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

export function formatDate(timestamp: number): string {
  return new Date(timestamp).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

// Pure function to generate a unique file key
export const generateFileKey = (
  departmentId: string,
  studentId: string,
  filename: string
): string => {
  const fileExtension = filename.split('.').pop() || '';
  return `${departmentId}/${studentId}/${createId()}.${fileExtension}`;
};
