import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ExpenseForm } from './components/ExpenseForm';
import { ExpenseTable } from './components/ExpenseTable';
import { getExpenses, createExpense, deleteExpense } from './api';
import { tokens } from './design';
import { Expense, ExpenseInput } from './types';

const AppContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: ${tokens.spacing.xxl};
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: ${tokens.spacing.xxl};
`;

const ErrorMessage = styled.p`
  color: ${tokens.colors.error};
  text-align: center;
  padding: ${tokens.spacing.lg};
  background: ${tokens.colors.errorBg};
  border-radius: ${tokens.border.radius};
`;

function App() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchExpenses = async () => {
    try {
      const data = await getExpenses();
      setExpenses(data);
      setError(null);
    } catch {
      setError('Failed to load expenses. Is the backend running?');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const handleAddExpense = async (expense: ExpenseInput) => {
    await createExpense(expense);
    await fetchExpenses();
  };

  const handleDeleteExpense = async (id: number) => {
    await deleteExpense(id);
    await fetchExpenses();
  };

  return (
    <AppContainer>
      <Title>Expense Tracker</Title>
      <ExpenseForm onSubmit={handleAddExpense} />
      {loading ? (
        <p>Loading expenses...</p>
      ) : error ? (
        <ErrorMessage>{error}</ErrorMessage>
      ) : (
        <ExpenseTable expenses={expenses} onDelete={handleDeleteExpense} />
      )}
    </AppContainer>
  );
}

export default App;
