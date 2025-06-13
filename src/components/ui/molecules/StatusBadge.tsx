import { FC } from 'hono/jsx';
import { Badge } from '../atoms/Badge';

type StatusType = 'approved' | 'pending' | 'rejected' | 'in_progress' | 'completed';

type StatusBadgeProps = {
  status: StatusType;
  className?: string;
};

export const StatusBadge: FC<StatusBadgeProps> = ({ status, className = '' }) => {
  // Standardize labels
  const labels: Record<StatusType, string> = {
    approved: 'Approved',
    pending: 'Pending',
    rejected: 'Rejected',
    in_progress: 'In Progress',
    completed: 'Completed'
  };

  // Standardize variants
  const variants: Record<StatusType, string> = {
    approved: 'success',
    pending: 'warning',
    rejected: 'danger',
    in_progress: 'warning',
    completed: 'success'
  };

  return (
    <Badge variant={variants[status]} className={className}>
      {labels[status]}
    </Badge>
  );
};