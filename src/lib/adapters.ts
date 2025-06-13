// R2 implementation of the storage adapter as pure functions
export const createR2StorageAdapter = (bucket: R2Bucket): StorageAdapter => ({
  async uploadFile(key: string, file: File): Promise<void> {
    const arrayBuffer = await file.arrayBuffer();
    await bucket.put(key, arrayBuffer, {
      httpMetadata: {
        contentType: file.type,
      },
    });
  },

  async getSignedUrl(key: string, expiresIn: number): Promise<string> {
    return await bucket.createPresignedUrl(key, { expiresIn });
  },

  async deleteFile(key: string): Promise<void> {
    await bucket.delete(key);
  }
});

// Interface for the storage adapter
export interface StorageAdapter {
  uploadFile: (key: string, file: File) => Promise<void>;
  getSignedUrl: (key: string, expiresIn: number) => Promise<string>;
  deleteFile: (key: string) => Promise<void>;
}