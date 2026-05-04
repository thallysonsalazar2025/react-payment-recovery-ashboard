import * as Dialog from '@radix-ui/react-dialog';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCreatePayment } from '@/hooks/usePayments';
import { toast } from 'sonner';

const schema = z.object({ name: z.string().min(1), email: z.string().email(), description: z.string().min(1), value: z.coerce.number().positive() });
type Form = z.infer<typeof schema>;

export const CreatePaymentModal = () => {
  const form = useForm<Form>({ resolver: zodResolver(schema) });
  const mutation = useCreatePayment();
  const onSubmit = (values: Form) => mutation.mutate(values, { onSuccess: () => toast.success('Pagamento criado com sucesso'), onError: () => toast.error('Erro ao criar pagamento') });

  return <Dialog.Root><Dialog.Trigger asChild><Button>Novo Pagamento</Button></Dialog.Trigger><Dialog.Portal><Dialog.Overlay className="fixed inset-0 bg-black/40" /><Dialog.Content className="fixed left-1/2 top-1/2 w-[90vw] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-5"><Dialog.Title className="mb-3 text-lg font-semibold">Criar pagamento</Dialog.Title><form className="space-y-3" onSubmit={form.handleSubmit(onSubmit)}><Input placeholder="Nome" {...form.register('name')} /><Input placeholder="E-mail" {...form.register('email')} /><Input placeholder="Descrição" {...form.register('description')} /><Input type="number" step="0.01" placeholder="Valor" {...form.register('value')} /><Button type="submit" className="w-full">Salvar</Button></form></Dialog.Content></Dialog.Portal></Dialog.Root>;
};
