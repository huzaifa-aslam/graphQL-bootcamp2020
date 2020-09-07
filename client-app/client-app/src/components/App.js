import React from 'react';
import './App.css';
import client from './../Config/gql_confiq'
import { ApolloProvider } from '@apollo/client';
import Books from './Books'


function App() {
  return (
    <ApolloProvider client={client}>
     <Books/>
    </ApolloProvider>
  );
}

export default App;
