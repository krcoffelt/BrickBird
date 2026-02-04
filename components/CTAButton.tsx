import { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export function CTAButton({ variant = 'primary', className = '', ...props }: Props) {
  const base = 'btn focus-ring';
  const styles = variant === 'primary' ? 'btn-primary' : 'btn-secondary';
  return <button className={`${base} ${styles} ${className}`} {...props} />;
}
