import { ApolloClient, InMemoryCache } from "@apollo/client";
const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/graphql",
  cache: new InMemoryCache(),
  connectToDevTools: true,
});
export default client;
