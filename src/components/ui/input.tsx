import type { InputHTMLAttributes } from 'react';

export const Input = (props: InputHTMLAttributes<HTMLInputElement>) => (
  <input className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-mpBlue focus:outline-none" {...props} />
);
