import React, { useState, useContext } from 'react';
import { StudentContext } from '../Context/StudentContext';

const StudentForm = () => {
  const [name, setName] = useState('');
  const [score, setScore] = useState('');
  const { dispatch } = useContext(StudentContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (name.trim() === '' || score.trim() === '' || isNaN(score)) {
      alert('נא למלא את כל השדות ולוודא שהציון הוא מספר.');
      return;
    }

    dispatch({ type: 'ADD_STUDENT', payload: { name, score: parseInt(score) } });
    setName('');
    setScore('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>שם תלמיד:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>ציון:</label>
        <input type="number" value={score} onChange={(e) => setScore(e.target.value)} required />
      </div>
      <button type="submit">הוסף תלמיד</button>
    </form>
  );
};

export default StudentForm;
