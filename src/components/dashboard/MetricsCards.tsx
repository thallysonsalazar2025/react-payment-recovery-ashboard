import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { useMetrics } from '@/hooks/useMetrics';

export const MetricsCards = () => {
  const { data, isLoading } = useMetrics();
  if (isLoading) return <div className="grid grid-cols-2 gap-4 md:grid-cols-4">{Array.from({ length: 4 }).map((_, i) => <Skeleton key={i} className="h-24" />)}</div>;
  const entries = [
    { label: 'Aprovados', value: data?.approved ?? 0 },
    { label: 'Pendentes', value: data?.pending ?? 0 },
    { label: 'Rejeitados', value: data?.rejected ?? 0 },
    { label: 'Conversão', value: `${data?.conversionRate ?? 0}%` },
  ];
  return <div className="grid grid-cols-2 gap-4 md:grid-cols-4">{entries.map((e) => <Card key={e.label}><p className="text-sm text-slate-500">{e.label}</p><p className="text-2xl font-bold">{e.value}</p></Card>)}</div>;
};
