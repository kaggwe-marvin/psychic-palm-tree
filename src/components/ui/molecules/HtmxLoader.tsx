import { FC } from 'hono/jsx';

type HtmxLoaderProps = {
  id: string;
  url: string;
  trigger?: string;
  target?: string;
  swap?: string;
  loadingContent?: React.ReactNode;
  children?: React.ReactNode;
};

export const HtmxLoader: FC<HtmxLoaderProps> = ({
  id,
  url,
  trigger = 'load',
  target = 'this',
  swap = 'innerHTML',
  loadingContent,
  children
}) => {
  return (
    <div
      id={id}
      hx-get={url}
      hx-trigger={trigger}
      hx-target={target === 'this' ? `#${id}` : target}
      hx-swap={swap}
      hx-indicator={`#${id}-loading`}
    >
      <div id={`${id}-loading`} className="htmx-indicator p-6 text-center">
        {loadingContent || (
          <>
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <p className="mt-2">Loading...</p>
          </>
        )}
      </div>
      {children}
    </div>
  );
};