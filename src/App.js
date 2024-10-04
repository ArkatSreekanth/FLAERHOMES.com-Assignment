import './App.css'
import {Component} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import {GlobalStyle} from './styledComponents'
import Home from './components/Home'
import BooksPage from './components/BooksPage'
import BooksContext from './BooksContext'
import Navbar from './components/Navbar'
import Library from './components/Library'

const booksData = [
  {
    id: 1,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    genre: 'Classic',
    rating: 4.7,
    description:
      'A novel set in the Jazz Age that explores themes of wealth, love, and the American Dream.',
    publicationYear: 1925,
    isFavourite: false,
  },
  {
    id: 2,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'Fiction',
    rating: 4.8,
    description:
      "A timeless novel of a child's moral awakening and a poignant tale of race and justice in the American South.",
    publicationYear: 1960,
    isFavourite: false,
  },
  {
    id: 3,
    title: '1984',
    author: 'George Orwell',
    genre: 'Dystopian',
    rating: 4.6,
    description:
      'A dystopian social science fiction novel and cautionary tale about the dangers of totalitarianism.',
    publicationYear: 1949,
    isFavourite: false,
  },
  {
    id: 4,
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    genre: 'Romance',
    rating: 4.9,
    description:
      'A romantic novel that also serves as a social commentary on the British landed gentry of the early 19th century.',
    publicationYear: 1813,
    isFavourite: false,
  },
  {
    id: 5,
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    genre: 'Fiction',
    rating: 4.3,
    description:
      'A story about a young boy’s journey through the challenges of adolescence.',
    publicationYear: 1951,
    isFavourite: false,
  },
]

class App extends Component {
  state = {
    libraryBooks: [],
  }

  addToLibrary = id => {
    const {libraryBooks} = this.state
    const doBookExist = libraryBooks.filter(
      eachItem => eachItem.id === parseInt(id),
    )
    if (doBookExist.length === 0) {
      const selectedBook = booksData.filter(
        eachItem => eachItem.id === parseInt(id),
      )
      const addedBook = {...selectedBook[0], isFavourite: true}
      console.log(addedBook)
      this.setState(prevState => ({
        libraryBooks: [...prevState.libraryBooks, addedBook],
      }))
    } else {
      this.setState({libraryBooks})
    }
  }

  removeTheBook = id => {
    const {libraryBooks} = this.state
    const remBooks = libraryBooks.filter(eachItem => eachItem.id !== id)

    this.setState({libraryBooks: remBooks})
  }

  render() {
    const {libraryBooks} = this.state
    console.log(libraryBooks)
    return (
      <BooksContext.Provider
        value={{
          libraryBooks,
          removeTheBook: this.removeTheBook,
          addToLibrary: this.addToLibrary,
        }}
      >
        <BrowserRouter>
          <GlobalStyle />
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/books/:id" component={BooksPage} />
            <Route exact path="/library" component={Library} />
          </Switch>
        </BrowserRouter>
      </BooksContext.Provider>
    )
  }
}

export default App
