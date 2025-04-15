
import StaffLayout from '../components/layout/StaffLayout';
import NewTodo from '../components/NewTodo';
import TodoList from '../components/TodoList';

export default function Home() {
  return (
    <StaffLayout title="Staff Portal">
      <div class="mt-8 max-w-sm mx-auto">
        <NewTodo/>
        <TodoList/>
      </div>
    </StaffLayout>
  );
} 