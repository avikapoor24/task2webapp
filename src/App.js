import React, { useState } from 'react';
import axios from 'axios';
import './App.css'

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://reqres.in/api/users?page=1');
      setUsers(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error('Error:', error);
      setLoading(false);
    }
  };

  return (
    <div>
      <nav>
        <div className="brand">A.CORP</div>
        <button onClick={getUsers}>Get Users</button>
      </nav>
      {loading ? (
        <div className="loader">Loading...</div>
      ) : (
        <div className="user-grid">
          {users.map(user => (
            <div className="user-card" key={user.id}>
              <img src={user.avatar} alt={user.first_name} />
              <div className="user-name">{`${user.first_name} ${user.last_name}`}</div>
              <div className="user-email">{user.email}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
