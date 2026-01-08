import { Expense } from '../types';

interface ExpenseTableProps {
  expenses: Expense[];
  onDelete: (id: number) => Promise<void>;
}

export function ExpenseTable({ expenses, onDelete }: ExpenseTableProps) {
  if (expenses.length === 0) {
    return <p className="no-expenses">No expenses yet. Add one above!</p>;
  }

  return (
    <div className="table-container">
      <table className="expense-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.title}</td>
              <td>${parseFloat(expense.amount).toFixed(2)}</td>
              <td>{expense.date}</td>
              <td>
                <button
                  className="delete-btn"
                  onClick={() => onDelete(expense.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
