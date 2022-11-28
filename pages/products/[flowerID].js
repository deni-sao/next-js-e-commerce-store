import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { getFLowerById } from '../../database/flowers';
// import { flowers } from '../../database/flowers';
import { getParsedCookie, setStringifiedCookie } from '../../utils/cookies';

export default function Flower(props) {
  if (props.error) {
    return (
      <div>
        <Head>
          <title>Flower not found</title>
          <meta name="description" content="Flower not found" />
        </Head>
        <h1>
          Error. Please try the <Link href="/flowers"> products</Link> page
          instead.
          {props.error}
        </h1>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
      <Head>
        <title>The {props.flower.firstName} Bouquet</title>
        <meta
          name="description"
          content={`${props.flower.firstName} costs ${props.flower.price}`}
        />
      </Head>
      <Image
        className="object-cover w-full rounded-md h-72 xl:h-80"
        src={`/${props.flower.id}-${props.flower.firstName.toLowerCase()}.jpg`}
        alt={props.flower.alt}
        width="300"
        height="400"
      />
      <h1 className="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200">
        {props.flower.firstName}
      </h1>
      <p className="text-grey-500">{props.flower.price}€</p>

      {/* - 1 + buttons */}
      <div className="flex justify-center w-1/5">
        <svg
          onClick={() => {
            // check the value of the cookie qty
            const currentCookieValue = getParsedCookie('qty');
            // if there is no cookie called qty we initialize the value with -1
            if (!currentCookieValue) {
              setStringifiedCookie('qty', [{ id: props.flower.id, qty: -1 }]);
              return;
            }

            // find the object that matches the id of the page
            const foundCookie = currentCookieValue.find(
              (cookieFlowerObject) => cookieFlowerObject.id === props.flower.id,
            );

            // if an object is not found add a new object
            if (!foundCookie) {
              currentCookieValue.push({ id: props.flower.id, qty: -1 });
            } else {
              // if object is found update the qty
              foundCookie.qty--;
            }
            // set the new value of the cookie
            setStringifiedCookie('qty', currentCookieValue);
          }}
          className="fill-current text-gray-600 w-3 cursor-pointer"
          viewBox="0 0 448 512"
        >
          <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
        </svg>

        <input className="mx-2 border text-center w-8" value="1" readOnly />

        <svg
          onClick={() => {
            // check the current value of the cookie qty
            const currentCookieValue = getParsedCookie('qty');
            // if there is no cookie called qty we initialize the value with 1
            if (!currentCookieValue) {
              setStringifiedCookie('qty', [{ id: props.flower.id, qty: 1 }]);
              return;
            }

            // find the object that matches the id of the page
            const foundCookie = currentCookieValue.find(
              (cookieFlowerObject) => cookieFlowerObject.id === props.flower.id,
            );

            // if an object is not found add a new object
            if (!foundCookie) {
              currentCookieValue.push({ id: props.flower.id, qty: 1 });
            } else {
              // if object is found update the qty
              foundCookie.qty++;
            }
            // set the new value of the cookie
            setStringifiedCookie('qty', currentCookieValue);
          }}
          className="fill-current text-gray-600 w-3 cursor-pointer"
          viewBox="0 0 448 512"
        >
          <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
        </svg>
      </div>

      {/* add to cart button */}
      <button className="flex items-center justify-center w-80 px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-rose-400 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 mx-1"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
        </svg>
        <span className="mx-1">Add to cart</span>
      </button>
    </div>
  );
}

export async function getServerSideProps(context) {
  // console.log(context.query);
  // console.log('flowers', flowers);
  const flowerID = parseInt(context.query.flowerID);
  // const foundFlower = flowers.find((flower) => {
  //   return flower.id === flowerID;
  // });

  const foundFlower = await getFLowerById(flowerID);

  if (typeof foundFlower === 'undefined') {
    context.res.statusCode = 404;
    return {
      props: {
        error: 'Flower not found',
      },
    };
  }

  return {
    props: { flower: foundFlower },
  };
}
