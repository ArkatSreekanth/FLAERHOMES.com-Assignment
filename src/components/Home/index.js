import './index.css'
import {Component} from 'react'

import BooksItem from '../BooksItem'

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
  },
]

class Home extends Component {
  state = {
    booksList: booksData,
    searchText: '',
    isEmpty: false,
  }

  onChangeSearchInput = event => this.setState({searchText: event.target.value})

  searchBooks = event => {
    event.preventDefault()
    const {searchText} = this.state
    const userInput = searchText.trim().toLowerCase()

    if (userInput.length !== 0) {
      const searchedBooks = booksData.filter(
        eachItem =>
          eachItem.author.toLowerCase().includes(userInput) ||
          eachItem.genre.toLowerCase().includes(userInput) ||
          eachItem.title.toLowerCase().includes(userInput),
      )
      if (searchedBooks.length === 0) {
        this.setState({isEmpty: true})
      } else {
        this.setState({booksList: searchedBooks, isEmpty: false})
      }
    } else {
      this.setState({booksList: booksData, isEmpty: false})
    }
  }

  render() {
    const {booksList, isEmpty} = this.state
    return (
      <div className="home-bg-container">
        <h1 className="main-heading">Books Page</h1>
        <form onSubmit={this.searchBooks}>
          <input
            type="search"
            placeholder="Search"
            className="search-box"
            onChange={event => {
              this.onChangeSearchInput(event)
            }}
          />
        </form>
        {isEmpty ? (
          <p className="main-heading">No Book Found</p>
        ) : (
          <ul className="books-list">
            {booksList.map(eachItem => (
              <BooksItem eachItem={eachItem} key={eachItem.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default Home
