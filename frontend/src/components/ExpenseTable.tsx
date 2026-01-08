import { Table, Button, Column } from '../design';
import { Expense } from '../types';

interface ExpenseTableProps {
  expenses: Expense[];
  onDelete: (id: number) => Promise<void>;
}

export function ExpenseTable({ expenses, onDelete }: ExpenseTableProps) {
  const columns: Column<Expense>[] = [
    { key: 'title', header: 'Title' },
    {
      key: 'amount',
      header: 'Amount',
      render: (expense) => `$${parseFloat(expense.amount).toFixed(2)}`,
    },
    { key: 'date', header: 'Date' },
    {
      key: 'actions',
      header: 'Actions',
      render: (expense) => (
        <Button variant="danger" onClick={() => onDelete(expense.id)}>
          Delete
        </Button>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      data={expenses}
      keyField="id"
      emptyMessage="No expenses yet. Add one above!"
    />
  );
}
