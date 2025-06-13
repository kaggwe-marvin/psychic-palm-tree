export default function DeleteUserButton({ userId, className = "text-red-600 hover:text-red-800 hover:underline" }: { userId: string, className?: string }) {
  if (!userId) {
    console.error("DeleteUserButton: userId is required");
    return null; // Don't render the button if there's no userId
  }

  return (
    <form method="POST" action={`/admin/users/${userId}/delete`}>
      <button 
        className={className}
        onClick={(e) => {
          if (!confirm("Are you sure you want to delete this user? This action cannot be undone.")) {
            e.preventDefault();
          }
        }}
      >
        Delete
      </button>
    </form>
  );
}