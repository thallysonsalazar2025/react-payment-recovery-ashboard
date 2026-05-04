import { api } from './api';
import type { CreatePaymentPayload, Payment, PaymentMetrics } from '@/types/payment';

export const paymentService = {
  getMetrics: async () => (await api.get<PaymentMetrics>('/metrics')).data,
  getPayments: async () => (await api.get<Payment[]>('')).data,
  createPayment: async (payload: CreatePaymentPayload) => (await api.post('/create', payload)).data,
  retryPayment: async (id: string) => (await api.post(`/${id}/retry`)).data,
};
