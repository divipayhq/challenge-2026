import { useState } from 'react';
import styled from 'styled-components';
import { Button, Input, Card, tokens } from '../design';
import { ExpenseInput } from '../types';

interface ExpenseFormProps {
  onSubmit: (expense: ExpenseInput) => Promise<void>;
}

const FormCard = styled(Card)`
  margin-bottom: ${tokens.spacing.xxl};
`;

const FormTitle = styled.h2`
  margin-bottom: ${tokens.spacing.lg};
`;

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
    <FormCard>
      <form onSubmit={handleSubmit}>
        <FormTitle>Add Expense</FormTitle>
        <Input
          id="title"
          label="Title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Expense title"
          required
        />
        <Input
          id="amount"
          label="Amount ($)"
          type="number"
          step="0.01"
          min="0"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="0.00"
          required
        />
        <Input
          id="date"
          label="Date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <Button type="submit" disabled={submitting}>
          {submitting ? 'Adding...' : 'Add Expense'}
        </Button>
      </form>
    </FormCard>
  );
}
