// AuthActions.js
import { useWorkContext } from './WorkContext';
import axios from 'axios';

export const useAuthActions = () => {
  const { dispatch } = useWorkContext();

  const login = async (email, password) => {
    const response = await axios.post('http://localhost:5678/api/users/login', {
      email,
      password
    });
    const { token, userId } = response.data;
    dispatch({ type: 'setToken', payload: { token, userId } });
  };

  return {
    login
  };
};
