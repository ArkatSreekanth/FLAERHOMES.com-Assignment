import './index.css'
import BooksContext from '../../BooksContext'
import BooksItem from '../BooksItem'

const Library = () => (
  <BooksContext.Consumer>
    {value => {
      const {libraryBooks} = value
      console.log(libraryBooks)

      return (
        <ul>
          {libraryBooks.length === 0 ? (
            <h1 className="main-heading">Not Found</h1>
          ) : (
            libraryBooks.map(eachItem => <BooksItem eachItem={eachItem} />)
          )}
        </ul>
      )
    }}
  </BooksContext.Consumer>
)

export default Library
