// WorkActions.js
import { useWorkContext } from './WorkContext';
import axios from 'axios';



export const useWorkActions = () => {
  const {  dispatch } = useWorkContext();

  const fetchWorks = async () => {
    try {
      const response = await axios.get('http://localhost:5678/api/works');
      dispatch({ type: 'fetchWorks', payload: response.data });
    } catch (err) {
      console.error("An error occurred trying to fetch work", err);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://localhost:5678/api/categories');
      dispatch({ type: 'fetchCategories', payload: response.data });
    } catch (err) {
      console.error("An error occurred trying to fetch categories", err);
    }
  };

  const addWork = async (work, header) => {
    try {
      const response = await axios.post('http://localhost:5678/api/works', work, {
        headers: {
          'Authorization': header,
          'Accept': '*/*'
        }
      });
      dispatch({ type: 'addWork', payload: response.data });
    } catch (err) {
      console.error("An error occurred trying to add a new work", err);
    }
  };

  const deleteWork = async (id, header) => {

    try {
      await axios.delete(`http://localhost:5678/api/works/${id}`, {
        headers: {
          'Authorization': header,
          'Accept': '*/*'
        }
      });
      dispatch({ type: 'deleteWork', id });
    } catch (err) {
      console.error("An error occurred trying to delete a new work", err);
    }
  };

  return {
    fetchWorks,
    fetchCategories,
    addWork,
    deleteWork
  };
};
