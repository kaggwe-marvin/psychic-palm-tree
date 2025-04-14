import { User } from "../db/schema"

export default function TodoItem({ id, name, role }: User) {
  return (
    <li key={id} id={`todo-${id}`} class="py-3 sm:py-4">
      <div class="flex items-center">
        <div class="flex-1 min-w-0 ms-4">
          <p class="text-sm font-medium text-gray-900 truncate dark:text-white">{role}</p>
          <p class="text-sm text-gray-500 truncate dark:text-gray-400">{name}</p>
        </div>
        <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
          <button
            name="todoId"
            value={id}
            hx-delete="/api/todo"
            hx-swap="delete"
            hx-target={`#todo-${id}`}
            hx-ext="json-enc"
            hx-trigger="click"
            class="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            x
          </button>
        </div>
      </div>
    </li>
  );
}