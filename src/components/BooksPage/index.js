import './index.css'
import {withRouter} from 'react-router-dom'

import BooksContext from '../../BooksContext'

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
    imageUrl:
      'https://res.cloudinary.com/dcw3aji68/image/upload/v1728016694/330px-The_Great_Gatsby_Cover_1925_Retouched_olnfah.jpg',
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
    imageUrl:
      'https://res.cloudinary.com/dcw3aji68/image/upload/v1728016720/330px-To_Kill_a_Mockingbird__28first_edition_cover_29_pyjuux.jpg',
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
    imageUrl:
      'https://res.cloudinary.com/dcw3aji68/image/upload/v1728016769/1984_first_edition_cover_l6nlev.jpg',
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
    imageUrl:
      'https://res.cloudinary.com/dcw3aji68/image/upload/v1728016743/330px-PrideAndPrejudiceTitlePage_khqdju.jpg',
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
    imageUrl:
      'https://res.cloudinary.com/dcw3aji68/image/upload/v1728016548/800px-The_Catcher_in_the_Rye__281951_2C_first_edition_cover_29_cwncg2.jpg',
  },
]

const BooksPage = props => {
  const {match} = props
  const {id} = match.params
  const booksInfo = booksData.filter(eachItem => eachItem.id === parseInt(id))
  const {
    title,
    description,
    author,
    rating,
    publicationYear,
    genre,
    imageUrl,
    isFavourite,
  } = booksInfo[0]

  const backToList = () => {
    const {history} = props
    history.push('/')
  }
  return (
    <BooksContext.Consumer>
      {value => {
        const {addToLibrary} = value
        const addTheBook = () => {
          addToLibrary(id)
        }
        return (
          <div className="book-bg-container">
            <h1 className="heading-color">Books Details</h1>
            <img src={imageUrl} alt={title} className="book-img" />
            <div>
              <h1 className="book-title">{title}</h1>
              <p className="book-author">by {author}</p>
              <div className="book-details-container">
                <div className="left-column">
                  <p className="desc-color">
                    <strong className="heading-color">Genre:</strong> {genre}
                  </p>
                  <p className="desc-color">
                    <strong className="heading-color">Rating:</strong> {rating}
                  </p>
                  <p className="desc-color">
                    <strong className="heading-color">Publication Year:</strong>{' '}
                    {publicationYear}
                  </p>
                </div>
                <div className="right-column">
                  <p className="desc-color book-description">{description}</p>
                </div>
              </div>
              <div className="action-buttons">
                <button
                  className="btn add-to-favorites-btn"
                  type="button"
                  onClick={addTheBook}
                >
                  Add
                </button>

                <button
                  className="btn back-to-list-btn"
                  type="button"
                  onClick={backToList}
                >
                  Back to List
                </button>
              </div>
            </div>
          </div>
        )
      }}
    </BooksContext.Consumer>
  )
}

export default withRouter(BooksPage)
