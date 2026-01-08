export interface Expense {
  id: number;
  title: string;
  amount: string;
  date: string;
  created_at: string;
}

export interface ExpenseInput {
  title: string;
  amount: string;
  date: string;
}
