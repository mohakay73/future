import { useState } from 'react';
import useAxios from '../hooks/useAxios';

const GetBalance = () => {
  const [address, setAddress] = useState('');
  const { response, error, loading, fetchData } = useAxios();

  const handleGetBalance = async () => {
    await fetchData(`/crypto/balance/${address}`, 'GET');
  };

  return (
    <div>
      <h2>Get Balance</h2>
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Enter address"
      />
      <button onClick={handleGetBalance} disabled={loading}>
        {loading ? 'Fetching...' : 'Get Balance'}
      </button>
      {error && <p>{error}</p>}
      {response && <p>Balance: {response.balance}</p>}
    </div>
  );
};

export default GetBalance;
