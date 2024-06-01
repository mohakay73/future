import { useState } from 'react';
import useAxios from '../hooks/useAxios';

const AddFunds = () => {
  const [address, setAddress] = useState('');
  const [amount, setAmount] = useState('');
  const { response, error, loading, fetchData } = useAxios();

  const handleAddFunds = async () => {
    await fetchData('http://localhost:5001/api/v1/crypto/add-funds', 'POST', {}, { address, amount: Number(amount) } );
  };

  return (
    <div>
      <h2>Add Funds</h2>
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Enter address"
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount"
      />
      <button onClick={handleAddFunds} disabled={loading}>
        {loading ? 'Adding...' : 'Add Funds'}
      </button>
      {error && <p>{error}</p>}
      {response && <p>{response.message}</p>}
    </div>
  );
};

export default AddFunds;
