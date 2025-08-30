import React from 'react';
import './ExpenseList.css';

function ExpenseList() {
  const achievements = [
    { id: 1, description: 'Completed first coding project', effort: 75.50 },
    { id: 2, description: 'Read a technical book', effort: 45.00 }
  ];

  return (
    <div className="expense-list-container">
      <h2>Achievement History</h2>
      <ul>
        {achievements.map(achievement => (
          <li key={achievement.id}>
            {achievement.description}: {achievement.effort} hours
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;
