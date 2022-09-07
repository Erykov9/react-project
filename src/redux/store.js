import { createStore } from 'redux';
import initialState from './initialState';
import strContains from '../utils/strContains';

export const getFilteredCards = ({ cards, input }, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title, input));

export const getAllColumns = (state => state.columns);

export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });

export const addCard = payload => ({type: 'ADD_CARD', payload});

export const addInput = payload => ({type: 'FILTER_STRING', payload});

export const inputValue = (state => state.input);

export const getListById = ({ lists }, listId) => lists.find(list => list.id === listId);

export const getColumnsByList = ({ columns }, listId) => columns.filter(column => column.listId === listId);

export const getAllLists = (state => state.lists);

export const addList = payload => ({type: 'ADD_LIST', payload });



const reducer = (state, action) => {
  switch(action.type) {
    case 'ADD_COLUMN':
      return {...state, columns: [...state.columns, action.payload]};

    case 'ADD_CARD':
      return {...state, cards: [...state.cards, action.payload]};

    case 'FILTER_STRING':
      return {...state, input: action.payload};

    case 'ADD_LIST':
      return {...state, lists: [...state.lists, action.payload]}

    default:
      return state;
  }
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
