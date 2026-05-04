import { CreatePaymentModal } from '@/components/dashboard/CreatePaymentModal';
import { MetricsCards } from '@/components/dashboard/MetricsCards';
import { StatusDonutChart } from '@/components/dashboard/StatusDonutChart';
import { TransactionsTable } from '@/components/dashboard/TransactionsTable';

export const DashboardPage = () => (
  <main className="mx-auto max-w-7xl space-y-6 p-4">
    <header className="flex items-center justify-between rounded-lg bg-mpBlue p-4 text-white shadow-soft">
      <div>
        <h1 className="text-2xl font-bold">ML Payment Recovery Dashboard</h1>
        <p className="text-sm">Monitoramento e recuperação de pagamentos</p>
      </div>
      <CreatePaymentModal />
    </header>
    <MetricsCards />
    <StatusDonutChart />
    <TransactionsTable />
  </main>
);
