export type Invoice = {
  invoice: string;
  client: string;
  paymentStatus: Status;
  totalAmount: string;
  paymentMethod: string;
  dueDate?: string;
  createdAt?: string;
  description?: string;
  terms: string;
  taxRate?: number;
};

export type Client = {
  name: string;
  email: string;
};

export type Status = "Draft" | "Sent" | "Viewed" | "Paid" | "Overdue";
