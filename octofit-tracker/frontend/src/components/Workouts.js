import React, { useEffect, useState } from 'react';

const Workouts = () => {
  const [workouts, setWorkouts] = useState([]);
  useEffect(() => {
    const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`;
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        console.log('API endpoint:', endpoint);
        console.log('Fetched data:', data);
        setWorkouts(data.results || data);
      });
  }, []);
  return (
    <div className="card mb-4 shadow-sm">
      <div className="card-body">
        <h2 className="card-title mb-4">Entraînements</h2>
        <table className="table table-striped table-bordered">
          <thead className="table-light">
            <tr>
              <th>Nom</th>
              <th>Durée</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {workouts.map((workout, idx) => (
              <tr key={workout.id || idx}>
                <td>{workout.name || '-'}</td>
                <td>{workout.duration || '-'}</td>
                <td>
                  <button className="btn btn-secondary btn-sm">Détails</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Workouts;
