import React, { useContext } from 'react';
import { StudentContext } from '../Context/StudentContext';

const StudentList = () => {
  const { state, dispatch } = useContext(StudentContext);

  const handleRemove = (id, name) => {
    if (window.confirm(`האם אתה בטוח שברצונך למחוק את ${name}?`)) {
      dispatch({ type: 'REMOVE_STUDENT', payload: { id } });
    }
  };

  return (
    <div>
      <h2>רשימת תלמידים</h2>
      <ul>
        {state.map((student) => (
          <li key={student.id}>
            {student.name} - {student.score}
            <button onClick={() => handleRemove(student.id, student.name)}>×</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
