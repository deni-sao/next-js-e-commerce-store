import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { getFlowers } from '../../database/flowers';

export default function About(props) {
  console.log('props', props);
  return (
    <div>
      <Head>
        <title>Products</title>
        <meta name="description" content="Description of the flowers" />
      </Head>
      {/* <h1 className="">Our Products</h1> */}

      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-8 mx-auto">
          <div className="lg:flex lg:-mx-2">
            <div className="mt-6 lg:mt-0 lg:px-2 lg:w-4/5 mx-auto">
              <div className="grid grid-cols-1 gap-12 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
                {props.flowers.map((flower) => {
                  return (
                    <div
                      key={'flower-' + flower.id}
                      className="flex flex-col items-center justify-center w-full max-w-lg mx-auto"
                    >
                      <Link href={`/products/${flower.id}`}>
                        <a>
                          <Image
                            className="object-cover w-full rounded-md h-72 xl:h-80"
                            src={`/${flower.id}-${flower.firstName}.jpg`}
                            alt={flower.alt}
                            width="300"
                            height="400"
                          />
                        </a>
                      </Link>
                      <Link href={`/products/${flower.id}`}>
                        <h4 className="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200 cursor-pointer">
                          {flower.firstName}
                        </h4>
                      </Link>
                      <p className="text-grey-500">{flower.price}€</p>

                      <button className="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-rose-400 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
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
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export async function getServerSideProps() {
  const flowers = await getFlowers();

  return {
    props: {
      flowers: flowers,
    },
  };
}
