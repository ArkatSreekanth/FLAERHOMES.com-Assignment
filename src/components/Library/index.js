import './index.css'
import {Link} from 'react-router-dom'

import BooksContext from '../../BooksContext'

const Library = () => (
  <BooksContext.Consumer>
    {value => {
      const {libraryBooks, removeTheBook} = value

      return (
        <ul className="library-container">
          {libraryBooks.length === 0 ? (
            <h1 className="main-heading">Not Found</h1>
          ) : (
            libraryBooks.map(eachItem => {
              const {title, author, publicationYear, genre, rating, id} =
                eachItem
              return (
                <div className="library-item-container">
                  <li className="book-info-container" key={id}>
                    <Link to={`books/${id}`} className="library-info">
                      <h2 className="heading-color">{title}</h2>
                      <div className="extra-info">
                        <p className="desc-color">
                          <strong className="heading-color">Author:</strong>{' '}
                          {author}
                        </p>
                        <p className="desc-color">
                          <strong className="heading-color">Year:</strong>{' '}
                          {publicationYear}
                        </p>
                        <p className="desc-color">
                          <strong className="heading-color">Genre:</strong>{' '}
                          {genre}
                        </p>
                        <p className="desc-color">
                          <strong color="heading-color">Rating:</strong>{' '}
                          {rating}
                        </p>
                      </div>
                    </Link>
                    <div
                      style={{
                        textAlign: 'right',
                      }}
                    >
                      <button
                        type="button"
                        className="remove-btn"
                        onClick={() => removeTheBook(id)}
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                </div>
              )
            })
          )}
        </ul>
      )
    }}
  </BooksContext.Consumer>
)

export default Library
