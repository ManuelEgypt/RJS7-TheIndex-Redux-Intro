import authors from "../data.js";
const initialState = {
  authors: authors,
  newAuthorId: 5
};




const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'ADD_AUTHOR':
    const newAuthor={
    id: state.newAuthorId,
    first_name: "",
    last_name: "",
    imageUrl:
      "http://speakingtigerbooks.com/wp-content/uploads/2016/06/naguib-mahfouz-5.jpg",
    books: []
  }
      return {
          ...state,
          authors: state.authors.concat(newAuthor),
          newAuthorId: state.newAuthorId +1
      }
      case "DELETE_AUTHOR":
          return {
            ...state,
            authors: state.authors.filter(author => author !== action.payload)
          };
    default:
      return state;
  }
};

export default reducer;
