import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
// import { tryConnect } from '../database/connect';
import { flowers } from '../database/flowers';

// import Link from 'next/link';

export default function About() {
  return (
    <>
      <Head>
        <title>Cart</title>
        <meta name="description" content="Description of the flowers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <h1>Products in your cart:</h1> */}
      {/* use state to manipulate cart? */}

      <div
        className="relative z-50"
        aria-labelledby="slide-over-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <div className="pointer-events-auto w-screen max-w-md">
                <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                  <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                    <div className="flex items-start justify-between">
                      <h2
                        className="text-lg font-medium text-gray-900"
                        id="slide-over-title"
                      >
                        Shopping cart
                      </h2>
                      <div className="ml-3 flex h-7 items-center">
                        <Link href="/products">
                          <button
                            type="button"
                            className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                          >
                            <span className="sr-only">Close panel</span>

                            <svg
                              className="h-6 w-6"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </button>
                        </Link>
                      </div>
                    </div>

                    <div className="mt-8">
                      <div className="flow-root">
                        <ul className="-my-6 divide-y divide-gray-200">
                          <li className="flex py-6">
                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                              <Link href="/products">
                                <a>
                                  <Image
                                    src="/2-ella.jpg"
                                    alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                                    className="h-full w-full object-cover object-center"
                                    width="300"
                                    height="300"
                                  />
                                </a>
                              </Link>
                            </div>

                            <div className="ml-4 flex flex-1 flex-col">
                              <div>
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                  <h3>Ella</h3>
                                  <p className="ml-4">€20.00</p>
                                </div>
                              </div>

                              <div className="flex flex-1 items-end justify-between text-sm">
                                <p className="text-gray-500">
                                  Qty {flowers.qty}
                                </p>

                                <div className="flex">
                                  <button
                                    type="button"
                                    className="font-medium text-pink-600 hover:text-indigo-500"
                                  >
                                    Remove
                                  </button>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <p>Subtotal</p>
                      <p>€40.00</p>
                    </div>
                    <p className="mt-0.5 text-sm text-gray-500">
                      Shipping and taxes calculated at checkout.
                    </p>
                    <div className="mt-6">
                      <Link
                        href="/checkout"
                        className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                      >
                        Checkout
                      </Link>
                    </div>
                    <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                      <p>
                        or
                        <Link href="/products">
                          <button
                            type="button"
                            className="font-medium text-pink-600 hover:text-indigo-500"
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function getServerSideProps(context) {
  // console.log(tryConnect());
  console.log(context.req.cookies.qty);

  // get the cookies from the request object and parse it if it is not undefined
  const parsedCookies = context.req.cookies.qty
    ? JSON.parse(context.req.cookies.qty)
    : [];

  // loop over the database and add a new property called stars with either the value in the cookies or 0
  const flowerCookie = flowers.map((flower) => {
    return {
      ...flower,
      qty:
        parsedCookies.find(
          (cookieFlowerObject) => flower.id === cookieFlowerObject.id,
        )?.qty || 0,
    };
  });
  console.log(flowerCookie);

  return {
    props: {
      flowers: flowers,
    },
  };
}
