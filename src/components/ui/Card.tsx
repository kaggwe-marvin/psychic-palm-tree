export default function Card({ title, value }: { title: string; value: string }) {
  return (
    <div class="bg-white shadow rounded-2xl p-4">
  <div class="text-gray-500 text-sm mb-1">{{ title }}</div>
  <div class="text-2xl font-semibold">{{ value }}</div>
</div>

  );
}