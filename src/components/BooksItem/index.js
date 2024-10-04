import {Link} from 'react-router-dom'
import './index.css'

const BookItem = bookInfo => {
  const {eachItem} = bookInfo
  const {title, author, publicationYear, genre, rating, id} = eachItem

  return (
    <Link className="book-item" to={`/books/${id}`}>
      <li className="book-info-container">
        <h2 className="heading-color">{title}</h2>
        <div className="extra-info">
          <p className="desc-color">
            <strong className="heading-color">Author:</strong> {author}
          </p>
          <p className="desc-color">
            <strong className="heading-color">Year:</strong> {publicationYear}
          </p>
          <p className="desc-color">
            <strong className="heading-color">Genre:</strong> {genre}
          </p>
          <p className="desc-color">
            <strong color="heading-color">Rating:</strong> {rating}
          </p>
        </div>
      </li>
    </Link>
  )
}
export default BookItem
