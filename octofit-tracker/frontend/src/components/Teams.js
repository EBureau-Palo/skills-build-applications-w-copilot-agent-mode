import React, { useEffect, useState } from 'react';

const Teams = () => {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/teams/`;
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        console.log('API endpoint:', endpoint);
        console.log('Fetched data:', data);
        setTeams(data.results || data);
      });
  }, []);
  return (
    <div className="card mb-4 shadow-sm">
      <div className="card-body">
        <h2 className="card-title mb-4">Équipes</h2>
        <table className="table table-striped table-bordered">
          <thead className="table-light">
            <tr>
              <th>Nom</th>
              <th>Membres</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team, idx) => (
              <tr key={team.id || idx}>
                <td>{team.name || '-'}</td>
                <td>{team.members ? team.members.length : '-'}</td>
                <td>
                  <button className="btn btn-success btn-sm">Voir équipe</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Teams;
