import * as api from '../api';
import '../reducers/paintings';

export const fetchPaintings = () => async (dispatch) => {
    try {
      const { data } = await api.fetchPaintings();
  
      dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

export const createPainting = (post) => async (dispatch) => {
    try {
      const { data } = await api.createPainting(post);
  
      dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
      console.log(error.message);
    }
};
  
export const updatePainting = (id, post) => async (dispatch) => {
    try {
      const { data } = await api.updatePainting(id, post);
  
      dispatch({ type: 'UPDATE', payload: data });
    } catch (error) {
      console.log(error.message);
    }
};

export const deletePainting = (id) => async (dispatch) => {
    try {
      await api.deletePainting(id);
  
      dispatch({ type: 'DELETE', payload: id });
    } catch (error) {
      console.log(error.message);
    }
  };