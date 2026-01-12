import React, { useEffect, useState } from 'react';

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/users/`;
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        console.log('API endpoint:', endpoint);
        console.log('Fetched data:', data);
        setUsers(data.results || data);
      });
  }, []);
  return (
    <div className="card mb-4 shadow-sm">
      <div className="card-body">
        <h2 className="card-title mb-4">Utilisateurs</h2>
        <table className="table table-striped table-bordered">
          <thead className="table-light">
            <tr>
              <th>Nom d'utilisateur</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={user.id || idx}>
                <td>{user.username || '-'}</td>
                <td>{user.email || '-'}</td>
                <td>
                  <button className="btn btn-warning btn-sm">Profil</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Users;
