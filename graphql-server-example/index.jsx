const { ApolloServer, gql } = require('apollo-server');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.

 let books = [
    {
      title: 'Harry Potter and the Chamber of Secrets',
      author: 'J.K. Rowling',
    },
    {
      title: 'Jurassic Park',
      author: 'Michael Crichton',
    },
  ];

const typeDefs = gql`

  type Book {
    title: String
    author: String
  }

  input StudentInput{
    title:String
    author:String
  }

  type Mutation{
    addBook(input:StudentInput):Book
  }

  type Query {
    book: [Book]
  }
`;

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
    Query: {
      book: () => books,
    },
    Mutation:{
      addBook: (e,{input})=>{

        books.push(
          {
            title:input.title,
            author:input.author
          }
        )
        return {
          title:input.title,
            author:input.author
        }
      }
    }
  };

  // The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});