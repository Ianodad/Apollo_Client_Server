import { ApolloProvider } from "@apollo/client";

import "../styles/tailwind.css";
import "../styles/global.css";

import Layout from "../components/Layout.js";
import {useApollo} from "../graphql/client";

const MyApp = ({ Component, pageProps }) => {
  const apolloClient = useApollo();


  return (
    <ApolloProvider client={apolloClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
};

export default MyApp;
