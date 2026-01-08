import { useState, useEffect } from 'react';
import { ExpenseForm } from './components/ExpenseForm';
import { ExpenseTable } from './components/ExpenseTable';
import { Expense, ExpenseInput } from './types';

const API_URL = 'http://localhost:8000/api/expenses/';

function App() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchExpenses = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error('Failed to fetch expenses');
      const data = await response.json();
      setExpenses(data);
      setError(null);
    } catch (err) {
      setError('Failed to load expenses. Is the backend running?');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const handleAddExpense = async (expense: ExpenseInput) => {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(expense),
    });
    if (!response.ok) throw new Error('Failed to add expense');
    await fetchExpenses();
  };

  const handleDeleteExpense = async (id: number) => {
    const response = await fetch(`${API_URL}${id}/`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Failed to delete expense');
    await fetchExpenses();
  };

  return (
    <div className="app">
      <h1>Expense Tracker</h1>
      <ExpenseForm onSubmit={handleAddExpense} />
      {loading ? (
        <p>Loading expenses...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
        <ExpenseTable expenses={expenses} onDelete={handleDeleteExpense} />
      )}
    </div>
  );
}

export default App;
