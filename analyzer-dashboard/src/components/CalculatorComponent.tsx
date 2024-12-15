import { useState, FormEvent } from 'react';

const CalculatorComponent = () => {
  const [num1, setNum1] = useState<string>('');
  const [num2, setNum2] = useState<string>('');
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  console.log('Environment:', import.meta.env.MODE);  // Should show 'development'
  
  console.log(import.meta.env.VITE_REACT_APP_API_URL)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/api/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ num1: parseFloat(num1), num2: parseFloat(num2) }),
      });
      
      const data = await response.json();
      setResult(data.result);
      setError(null);
    } catch (err) {
      console.log(err);
      setResult(null);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Number Calculator</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            placeholder="Enter first number"
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <input
            type="number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            placeholder="Enter second number"
            className="w-full p-2 border rounded"
          />
        </div>
        <button 
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Add Numbers
        </button>
      </form>
      
      {result !== null && (
        <div className="mt-4 p-4 bg-green-100 rounded">
          Result: {result}
        </div>
      )}
      
      {error && (
        <div className="mt-4 p-4 bg-red-100 rounded">
          {error}
        </div>
      )}
    </div>
  );
};

export default CalculatorComponent;