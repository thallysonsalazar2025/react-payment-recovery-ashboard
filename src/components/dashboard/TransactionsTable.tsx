import { useMemo, useState } from 'react';
import { RotateCcw, Search } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { usePayments, useRetryPayment } from '@/hooks/usePayments';
import { toast } from 'sonner';

export const TransactionsTable = () => {
  const { data = [], isLoading } = usePayments();
  const retry = useRetryPayment();
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('ALL');

  const filtered = useMemo(() => data.filter((p) => (status === 'ALL' || p.status === status) && [p.id, p.customerName, p.email].join(' ').toLowerCase().includes(search.toLowerCase())), [data, search, status]);

  return <Card><div className="mb-4 flex flex-col gap-2 md:flex-row"><div className="relative flex-1"><Search className="absolute left-2 top-2.5 h-4 w-4 text-slate-400" /><Input className="pl-8" placeholder="Buscar por id, cliente ou email" value={search} onChange={(e) => setSearch(e.target.value)} /></div><select className="rounded-lg border px-3" value={status} onChange={(e) => setStatus(e.target.value)}><option value="ALL">Todos</option><option value="APPROVED">Aprovado</option><option value="PENDING">Pendente</option><option value="REJECTED">Rejeitado</option></select></div>{isLoading ? <p>Carregando...</p> : filtered.length === 0 ? <p className="text-slate-500">Nenhuma transação encontrada.</p> : <div className="overflow-auto"><table className="min-w-full text-sm"><thead><tr className="border-b text-left"><th>ID</th><th>Cliente</th><th>Valor</th><th>Método</th><th>Status</th><th>Ações</th></tr></thead><tbody>{filtered.map((p) => <tr key={p.id} className="border-b"><td>{p.id}</td><td>{p.customerName}</td><td>R$ {p.amount.toFixed(2)}</td><td>{p.method}</td><td>{p.status}</td><td>{p.status === 'REJECTED' ? <Button className="h-8 gap-2 px-2 py-1 text-xs" onClick={() => retry.mutate(p.id, { onSuccess: () => toast.success('Retry executado com sucesso'), onError: () => toast.error('Erro ao executar retry') })}><RotateCcw className="h-3 w-3" />Tentar Novamente</Button> : '-'}</td></tr>)}</tbody></table></div>}</Card>;
};
