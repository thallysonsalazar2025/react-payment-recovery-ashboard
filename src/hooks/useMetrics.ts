import { useQuery } from '@tanstack/react-query';
import { paymentService } from '@/services/paymentService';

export const useMetrics = () =>
  useQuery({
    queryKey: ['metrics'],
    queryFn: paymentService.getMetrics,
  });
