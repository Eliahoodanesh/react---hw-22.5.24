import React from 'react';
import { StudentProvider } from './Context/StudentContext';
import StudentForm from './Comps/StudentForm';
import StudentList from './Comps/StudentList';

const App = () => {
  return (
    <StudentProvider>
      <div>
        <h1>אפליקציית רשימת תלמידים</h1>
        <StudentForm />
        <StudentList />
      </div>
    </StudentProvider>
  );
};

export default App;
