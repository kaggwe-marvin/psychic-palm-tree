import { Hono } from 'hono';

const documents = new Hono();

documents.get('/transcript', (c) => {
  return c.html(`
    <div class="bg-gray-50 p-4 rounded shadow">
      <h4 class="text-lg font-medium text-gray-900 mb-2">Transcript</h4>
      <p class="text-sm text-gray-700">Your transcript is ready for download.</p>
      <a href="/downloads/transcript.pdf" class="mt-2 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Download</a>
    </div>
  `);
});

documents.get('/certificate', (c) => {
  return c.html(`
    <div class="bg-gray-50 p-4 rounded shadow">
      <h4 class="text-lg font-medium text-gray-900 mb-2">Certificate</h4>
      <p class="text-sm text-gray-700">Certificate is still being processed. Please check back later.</p>
    </div>
  `);
});

export default documents;
