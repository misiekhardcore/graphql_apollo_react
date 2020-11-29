import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import "./App.scss";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client";
import Launches from "./components/Launches";
import Launch from "./components/Launch";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <div className="navbar">
          <h1 className="navbar-brand mx-auto h1">
            <Link to="/">
              <h1>SpaceX</h1>
            </Link>
          </h1>
        </div>
        <div className="container h-100">
          <Route exact path="/" component={Launches} />
          <Route exact path="/launch/:flight_number" component={Launch} />
        </div>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
