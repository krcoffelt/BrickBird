import { ReactNode } from 'react';

type Props = { icon?: ReactNode; children: ReactNode };

export function Badge({ icon, children }: Props) {
  return (
    <span className="pill bg-sand text-charcoal/80">
      {icon}
      {children}
    </span>
  );
}
