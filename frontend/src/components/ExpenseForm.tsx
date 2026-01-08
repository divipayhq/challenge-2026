import { useState } from 'react';
import { ExpenseInput } from '../types';

interface ExpenseFormProps {
  onSubmit: (expense: ExpenseInput) => Promise<void>;
}

export function ExpenseForm({ onSubmit }: ExpenseFormProps) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !amount || !date) return;

    setSubmitting(true);
    try {
      await onSubmit({ title, amount, date });
      setTitle('');
      setAmount('');
      setDate('');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <h2>Add Expense</h2>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Expense title"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="amount">Amount ($)</label>
        <input
          id="amount"
          type="number"
          step="0.01"
          min="0"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="0.00"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <button type="submit" disabled={submitting}>
        {submitting ? 'Adding...' : 'Add Expense'}
      </button>
    </form>
  );
}
