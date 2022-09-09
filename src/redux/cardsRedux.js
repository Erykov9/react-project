import strContains from '../utils/strContains';

const ADD_CARD = 'app/cards/ADD_CARD'
const TOGGLE_CARD_FAVORITE = 'app/cards/TOGGLE_CARD_FAVORITE'


export const getAllCards = (state => state.cards);
export const getFilteredCards = ({ cards, input }, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title, input));
export const getFavoriteList = state => state.cards.filter(card => card.isFavorite === true)


export const addCard = payload => ({type: 'ADD_CARD', payload});
export const addFavorite = payload => ({type: 'TOGGLE_CARD_FAVORITE', payload});
export const deleteCard = payload => ({type: 'DELETE_CARD', payload});

const cardsReducer = (statePart = [], action) => {
  switch(action.type) {
    case 'ADD_CARD':
      return [...statePart, { ...action.payload}];
    case 'TOGGLE_CARD_FAVORITE':
      return statePart.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card);
    case 'DELETE_CARD':
      return statePart.filter(card => (card.id !== action.payload));
    default:
      return statePart;
  }
}

export default cardsReducer;