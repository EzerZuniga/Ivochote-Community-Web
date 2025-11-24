import React from 'react';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary'|'ghost' };

export default function Button({ variant='primary', children, ...props }: Props) {
  const base = 'px-4 py-2 rounded-md font-medium';
  const styles = variant === 'primary' ? 'bg-green-700 text-white hover:bg-green-800' : 'bg-transparent';
  return <button className={base + ' ' + styles} {...props}>{children}</button>;
}
