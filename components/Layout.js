import Head from 'next/head';
import Script from 'next/script';
import Footer from './Footer';
import Header from './Header';

export default function Layout(props) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icon-apple-touch.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>

      <Header />

      <main className="py-20 ">{props.children}</main>
      <Script src="https://app.enzuzo.com/apps/enzuzo/static/js/__enzuzo-cookiebar.js?uuid=e99c31a8-4bbf-11ed-93a5-0b6a4da61370" />
      <Footer />
    </>
  );
}
