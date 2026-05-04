import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { Card } from '@/components/ui/card';
import { useMetrics } from '@/hooks/useMetrics';

export const StatusDonutChart = () => {
  const { data } = useMetrics();
  const chartData = [
    { name: 'Aprovado', value: data?.approved ?? 0, color: '#009EE3' },
    { name: 'Pendente', value: data?.pending ?? 0, color: '#FFF159' },
    { name: 'Rejeitado', value: data?.rejected ?? 0, color: '#ef4444' },
  ];
  return <Card className="h-80"><h3 className="mb-2 font-semibold">Status dos Pagamentos</h3><ResponsiveContainer width="100%" height="90%"><PieChart><Pie data={chartData} innerRadius={65} outerRadius={100} dataKey="value">{chartData.map((e) => <Cell key={e.name} fill={e.color} />)}</Pie><Tooltip /></PieChart></ResponsiveContainer></Card>;
};
