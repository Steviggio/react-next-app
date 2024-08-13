// WorkContext.js
import React, { createContext, useReducer, useContext, useState } from 'react';

const WorkContext = createContext();

const initialState = {
  works: [],
  categories: [],
  token: '',
  userId: ''
};

function worksReducer(state, action) {
  switch (action.type) {
    case "fetchWorks":
      return { ...state, works: action.payload };
    case "fetchCategories":
      return { ...state, categories: action.payload };
    case "addWork":
      return { ...state, works: [...state.works, action.payload] };
    case "deleteWork":
      return { ...state, works: state.works.filter(w => w.id !== action.id) };
    case "setToken":
      return { ...state, token: action.payload.token, userId: action.payload.userId };
    default:
      throw new Error("Unknown action: " + action.type);
  }
}

export const WorkProvider = ({ children }) => {
  const [state, dispatch] = useReducer(worksReducer, initialState);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <WorkContext.Provider value={{ state, dispatch, isAuthenticated, setIsAuthenticated }}>
      {children}
    </WorkContext.Provider>
  );
};

export const useWorkContext = () => useContext(WorkContext);
