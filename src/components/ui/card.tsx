import type { PropsWithChildren } from 'react';
import { cn } from '@/lib/utils';

export const Card = ({ children, className }: PropsWithChildren<{ className?: string }>) => (
  <div className={cn('rounded-lg bg-mpWhite p-4 shadow-soft', className)}>{children}</div>
);
