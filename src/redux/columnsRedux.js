const ADD_COLUMN = 'app/columns/ADD_COLUMN';

export const getColumnsByList = ({ columns }, listId) => columns.filter(column => column.listId === listId);
export const getAllColumns = (state => state.columns);

export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });

const columnsReducer = (statePart = [], action) => {
  switch(action.type) {
    case 'ADD_COLUMN':
      return [...statePart, { ...action.payload}];
    default:
      return statePart;
  }
}

export default columnsReducer;
