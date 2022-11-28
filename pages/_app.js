import '../styles/globals.css';
import CookieBanner from '../components/CookieBanner';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CookieBanner>cookie banner</CookieBanner>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
