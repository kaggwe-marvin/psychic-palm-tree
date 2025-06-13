import { FC } from 'hono/jsx';

type HtmxFormProps = {
  id: string;
  action: string;
  method?: 'get' | 'post' | 'put' | 'delete';
  target?: string;
  swap?: string;
  trigger?: string;
  enctype?: string;
  resetAfterSubmit?: boolean;
  children: React.ReactNode;
  onSuccess?: string;
  onError?: string;
};

export const HtmxForm: FC<HtmxFormProps> = ({
  id,
  action,
  method = 'post',
  target = 'closest form',
  swap = 'outerHTML',
  trigger = 'submit',
  enctype,
  resetAfterSubmit = false,
  children,
  onSuccess,
  onError
}) => {
  return (
    <form
      id={id}
      hx-target={target}
      hx-swap={swap}
      hx-trigger={trigger}
      hx-{method}={action}
      {...(enctype ? { 'hx-encoding': enctype } : {})}
      {...(resetAfterSubmit ? { 'hx-on::after-request': 'this.reset()' } : {})}
      {...(onSuccess ? { 'hx-on:htmx:after-request': onSuccess } : {})}
      {...(onError ? { 'hx-on:htmx:error': onError } : {})}
    >
      <div id={`${id}-indicator`} className="htmx-indicator flex items-center justify-center py-2">
        <div className="animate-spin h-5 w-5 mr-2 border-b-2 border-blue-600 rounded-full"></div>
        <span>Processing...</span>
      </div>
      
      {children}
    </form>
  );
};