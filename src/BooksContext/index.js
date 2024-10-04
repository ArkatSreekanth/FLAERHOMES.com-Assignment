import React from 'react'

const BooksContext = React.createContext({
  libraryBooks: [],
  addToLibrary: () => {},
  removeTheBook: () => {},
})

export default BooksContext
