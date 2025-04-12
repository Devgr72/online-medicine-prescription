import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Admin.css';
import paracetmol from '../Assets/para.jpg';
import cetri from '../Assets/cetri.jpg';

const Admin = () => {
  const navigate = useNavigate();

  const [activities, setActivities] = useState([
    {
      _id: '1',
      user: { name: 'Dev' },
      medicineImage: paracetmol,
      medicineName: 'Paracetamol 500g',
      prescription: paracetmol,
    },
    {
      _id: '2',
      user: { name: 'pajji' },
      medicineImage: cetri,
      medicineName: 'Cetirizine 10mg',
      prescription: cetri,
    }
  ]);

  const handleDecision = async (id, decision) => {
    const activity = activities.find(act => act._id === id);

    try {
      // Send email to backend
      await fetch('http://localhost:8000/send-status-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userName: activity.user.name,
          medicineName: activity.medicineName,
          decision: decision
        })
      });

      alert(`Email sent for ${decision} decision.`);

      // Remove from activity list after decision
      setActivities(prev => prev.filter(activity => activity._id !== id));
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email.');
    }
  };

  return (
    <div className="admin-container">
      <h1>User Activity Panel</h1>
      <button className="home-btn" onClick={() => navigate('/')}>Return to Home</button>

      <div className="activity-table">
        <table>
          <thead>
            <tr>
              <th>User</th>
              <th>Medicine Image</th>
              <th>Medicine Name</th>
              <th>Prescription</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {activities.map(activity => (
              <tr key={activity._id}>
                <td>{activity.user.name}</td>
                <td>
                  <img src={activity.medicineImage} alt="med" className="thumb" />
                </td>
                <td>{activity.medicineName}</td>
                <td>
                  {activity.prescription ? (
                    <img src={activity.prescription} alt="prescription" className="thumb" />
                  ) : 'None'}
                </td>
                <td>
                  <button className="approve" onClick={() => handleDecision(activity._id, 'approved')}>Allow</button>
                  <button className="deny" onClick={() => handleDecision(activity._id, 'denied')}>Deny</button>
                </td>
              </tr>
            ))}
            {activities.length === 0 && (
              <tr>
                <td colSpan="5">No pending activities</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
