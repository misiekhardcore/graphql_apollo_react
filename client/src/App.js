import React from "react";
import "./App.scss";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client";
import Launches from "./components/Launches";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="navbar">
        <h1 className="navbar-brand mx-auto h1">SpaceX</h1>
      </div>
      <div className="container">
        <Launches />
      </div>
    </ApolloProvider>
  );
}

export default App;
