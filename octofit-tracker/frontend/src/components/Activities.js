import React, { useEffect, useState } from 'react';

const Activities = () => {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/activities/`;
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        console.log('API endpoint:', endpoint);
        console.log('Fetched data:', data);
        setActivities(data.results || data);
      });
  }, []);
  return (
    <div className="card mb-4 shadow-sm">
      <div className="card-body">
        <h2 className="card-title mb-4">Activités</h2>
        <table className="table table-striped table-bordered">
          <thead className="table-light">
            <tr>
              <th>Nom</th>
              <th>Type</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity, idx) => (
              <tr key={activity.id || idx}>
                <td>{activity.name || '-'}</td>
                <td>{activity.type || '-'}</td>
                <td>
                  <button className="btn btn-primary btn-sm">Voir</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Activities;
