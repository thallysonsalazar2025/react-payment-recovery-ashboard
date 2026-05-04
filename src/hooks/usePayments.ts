import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { paymentService } from '@/services/paymentService';

export const usePayments = () => useQuery({ queryKey: ['payments'], queryFn: paymentService.getPayments });

export const useCreatePayment = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: paymentService.createPayment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['payments'] });
      queryClient.invalidateQueries({ queryKey: ['metrics'] });
    },
  });
};

export const useRetryPayment = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: paymentService.retryPayment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['payments'] });
      queryClient.invalidateQueries({ queryKey: ['metrics'] });
    },
  });
};
