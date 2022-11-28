import Head from 'next/head';

// const button = document.querySelector('#menu-button'); // Hamburger Icon
// const menu = document.querySelector('#menu'); // Menu

// button.addEventListener('click', () => {
//   menu.classList.toggle('hidden');
// });

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Overview of the flowers" />
      </Head>

      <div
        className="px-4

       "
      >
        <div
          className="
          flex
          justify-center
          items-center
          bg-white
          mx-auto
          max-w-2xl
          rounded-lg
          my-16
          p-16
        "
        >
          <h1 className="text-2xl font-medium">Welcome to our Flower Shop</h1>
        </div>
      </div>
    </>
  );
}
