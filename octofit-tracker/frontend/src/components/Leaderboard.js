import React, { useEffect, useState } from 'react';

const Leaderboard = () => {
  const [leaders, setLeaders] = useState([]);
  useEffect(() => {
    const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`;
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        console.log('API endpoint:', endpoint);
        console.log('Fetched data:', data);
        setLeaders(data.results || data);
      });
  }, []);
  return (
    <div className="card mb-4 shadow-sm">
      <div className="card-body">
        <h2 className="card-title mb-4">Classement</h2>
        <table className="table table-striped table-bordered">
          <thead className="table-light">
            <tr>
              <th>Nom</th>
              <th>Score</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {leaders.map((leader, idx) => (
              <tr key={leader.id || idx}>
                <td>{leader.name || '-'}</td>
                <td>{leader.score || '-'}</td>
                <td>
                  <button className="btn btn-info btn-sm">Profil</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Leaderboard;
