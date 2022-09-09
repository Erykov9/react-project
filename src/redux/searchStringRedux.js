const FILTER_STRING = 'app/searchString/FILTER_STRING';

export const inputValue = (state => state.input);
export const addInput = payload => ({type: 'FILTER_STRING', payload});


const searchStringReducer = (statePart = '', action) => {
  switch(action.type) {
    case 'FILTER_STRING':
      return action.payload
    default:
      return statePart;
  }
}

export default searchStringReducer;