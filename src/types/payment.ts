export type PaymentStatus = 'APPROVED' | 'PENDING' | 'REJECTED';

export interface Payment {
  id: string;
  customerName: string;
  email: string;
  description: string;
  amount: number;
  method: string;
  status: PaymentStatus;
}

export interface PaymentMetrics {
  approved: number;
  pending: number;
  rejected: number;
  conversionRate: number;
}

export interface CreatePaymentPayload {
  name: string;
  email: string;
  description: string;
  value: number;
}
