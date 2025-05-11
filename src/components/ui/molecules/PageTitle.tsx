import { JSX } from 'hono/jsx';

type PageTitleProps = {
  title: string;
};

export default function PageTitle({ title }: PageTitleProps) {
  return (
    <h2 className="text-xl font-semibold text-base-content">{title}</h2>
  );
}