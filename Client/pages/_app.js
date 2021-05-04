import { ApolloProvider } from "@apollo/client";

import "../styles/tailwind.css";
import "../styles/global.css";

import Layout from "../components/Layout.js";
import client from "../graphql/client";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
};

export default MyApp;
