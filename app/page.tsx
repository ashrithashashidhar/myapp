import React from "react";
import ApiTable from "./fetchapi";
import CountryList from "./countries";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";

const Home = () => {
  return (
    <>
      {/* <ApiTable /> */}
      <ApolloProvider client={client}>
        <CountryList />
      </ApolloProvider>
    </>
  );
};

export default Home;
