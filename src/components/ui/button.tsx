import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';

export function Button({ className, asChild = false, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : 'button';
  return <Comp className={cn('inline-flex items-center justify-center rounded-lg bg-mpBlue px-4 py-2 text-white hover:opacity-90 disabled:opacity-50', className)} {...props} />;
}
