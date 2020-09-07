import React from 'react'
import { useQuery, gql,useMutation } from '@apollo/client';

const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    book {
        title,
        author

    }
  }
`;

const ADD_BOOK = gql`
  mutation AddBook($title: String!,$author:String!) {
    addBook(input:{title: $title,author:$author}) {
        title
        author
    }
  }
`;

function Books() {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  const [updateBook] = useMutation(ADD_BOOK);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

    const {book}=data
    console.log(book)
  return(
      <div>
          <h1>Book List</h1>
          <form>
          <table border="2px">
              <tbody>

              <tr>
                  <th>Title</th>
                  <th>Author</th>
              </tr>
              {
                  book.map((item,index)=>{
                      return(
                          <tr key={index}>
                              <td>{item.title}</td>
                      <td>{item.author}</td>
                          </tr>
                      )
                  })
              }
              </tbody>
          </table>
          <button onClick={()=>updateBook({variables:{title:"newtitle",author:"newautohor"}})}>addbook</button>
          </form>
      </div>
  ) ;
}
export default Books