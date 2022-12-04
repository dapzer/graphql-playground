import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client';
import Layout from '../components/Layout';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
});

// const ssrClient = new ApolloClient({
//   ssrMode: true,
//   link: createHttpLink({
//     uri: 'http://localhost:3010',
//     credentials: 'same-origin',
//   }),
//   cache: new InMemoryCache(),
// });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
