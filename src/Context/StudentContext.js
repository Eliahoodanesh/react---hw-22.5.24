import React, { createContext, useReducer } from 'react';

// יצירת Context
const StudentContext = createContext();

// הגדרת הפעולות שניתן לבצע על ה-Context
const studentReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_STUDENT':
      return [...state, { name: action.payload.name, score: action.payload.score, id: state.length + 1 }];
    case 'REMOVE_STUDENT':
      return state.filter(student => student.id !== action.payload.id);
    default:
      return state;
  }
};

// קומפוננטת הספק של ה-Context
const StudentProvider = ({ children }) => {
  const [state, dispatch] = useReducer(studentReducer, []);

  return (
    <StudentContext.Provider value={{ state, dispatch }}>
      {children}
    </StudentContext.Provider>
  );
};

export { StudentContext, StudentProvider };
