import axios from 'axios';
axios.defaults.withCredentials = true;

export const GETTING = 'GETTING';
export const GOT = 'GOT';

export const ERROR = 'ERROR';


export const getNotes = () => dispatch => {
    dispatch({ type: GETTING });

    axios
        .get('https://cryptic-crag-26999.herokuapp.com/')
        .then(res => {
            dispatch({ type: GOT, notes: res.data })
        })
        .catch(error => {
            dispatch({ type: ERROR, errorMessage: 'Error getting the data'})
        });

};
