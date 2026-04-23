type Variant = 'primary' | 'secondary' | 'ghost';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

const VARIANT_STYLES: Record<Variant, string> = {
  primary: 'bg-primary-900 text-white hover:bg-primary-800 shadow-sm hover:shadow-md',
  secondary: 'bg-primary-100 text-primary-900 hover:bg-primary-200',
  ghost: 'bg-transparent hover:bg-primary-50 text-primary-900',
};

export default function Button({ variant = 'primary', children, className, ...props }: Props) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${VARIANT_STYLES[variant]} ${className ?? ''}`}
      {...props}
    >
      {children}
    </button>
  );
}
