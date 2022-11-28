// import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="header sticky top-0 bg-white shadow-md flex items-center justify-between px-8 py-02 z-40">
      <div className="w-3/12">Logo goes here</div>

      <nav className="nav font-semibold text-lg">
        <ul className="flex items-center">
          <li className="p-4 border-b-2 border-pink-500 border-opacity-0 hover:border-opacity-100 hover:text-pink-500 duration-200 cursor-pointer active">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4 border-b-2 border-pink-500 border-opacity-0 hover:border-opacity-100 hover:text-pink-500 duration-200 cursor-pointer">
            <Link href="/about">About</Link>
          </li>
          <li className="p-4 border-b-2 border-pink-500 border-opacity-0 hover:border-opacity-100 hover:text-pink-500 duration-200 cursor-pointer">
            <Link href="/products">Products</Link>
          </li>
          <li className="p-4 border-b-2 border-pink-500 border-opacity-0 hover:border-opacity-100 hover:text-pink-500 duration-200 cursor-pointer">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <div className="w-3/12 flex justify-end">
        <Link href="/cart">
          <svg
            className="h-8 p-1 hover:text-pink-500 duration-200 svg-inline--fa fa-shopping-cart fa-w-18 fa-7x"
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="shopping-cart"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path
              fill="currentColor"
              d="M551.991 64H144.28l-8.726-44.608C133.35 8.128 123.478 0 112 0H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h80.24l69.594 355.701C150.796 415.201 144 430.802 144 448c0 35.346 28.654 64 64 64s64-28.654 64-64a63.681 63.681 0 0 0-8.583-32h145.167a63.681 63.681 0 0 0-8.583 32c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-18.136-7.556-34.496-19.676-46.142l1.035-4.757c3.254-14.96-8.142-29.101-23.452-29.101H203.76l-9.39-48h312.405c11.29 0 21.054-7.869 23.452-18.902l45.216-208C578.695 78.139 567.299 64 551.991 64zM208 472c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm256 0c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm23.438-200H184.98l-31.31-160h368.548l-34.78 160z"
              className=""
            />
          </svg>
        </Link>
      </div>
    </header>
  );
}

// <div>
//   <header>
//     <nav
//       className="
//       flex flex-wrap
//       items-center
//       justify-between
//       w-full
//       py-4
//       md:py-0
//       px-4
//       text-lg text-gray-700
//       bg-white
//     "
//     >
//       <div>
//         <Link href="/">
//           <svg
//             width="150"
//             height="150"
//             viewBox="0 0 150 32.125"
//             version="1.1"
//             id="Layer_1"
//             xmlns="http://www.w3.org/2000/svg"
//             x="0"
//             y="0"
//             xmlSpace="preserve"
//             className="cursor-pointer"
//           >
//             <path
//               d="M60.163 52.234v-4.468c0-1.419 1.292-2.612 2.999-2.768l11.975-2.376c4.396-.487 8.24 2.955 8.24 7.378s-3.844 7.865-8.24 7.378l-11.975-2.376c-1.707-.156-2.999-1.349-2.999-2.768z"
//               fill="#e15c64"
//             />
//             <path
//               d="M53.147 59.918l3.869-2.234c1.229-.71 2.908-.187 3.896 1.213l8.045 9.183c2.62 3.564 1.561 8.614-2.269 10.825-3.831 2.212-8.733.604-10.51-3.447l-3.93-11.559c-.717-1.556-.33-3.271.899-3.981z"
//               fill="#e15c64"
//             />
//             <path
//               d="M42.984 57.685l3.869 2.234c1.229.71 1.616 2.424.898 3.981l-3.93 11.559c-1.776 4.051-6.679 5.659-10.51 3.447-3.831-2.212-4.889-7.261-2.269-10.825l8.045-9.183c.989-1.401 2.668-1.923 3.897-1.213z"
//               fill="#e15c64"
//             />
//             <path
//               d="M39.837 47.766v4.468c0 1.419-1.292 2.612-2.999 2.768l-11.975 2.376c-4.396.487-8.24-2.955-8.24-7.378s3.844-7.865 8.24-7.378l11.975 2.376c1.707.156 2.999 1.349 2.999 2.768z"
//               fill="#e15c64"
//             />
//             <path
//               d="M46.853 40.082l-3.869 2.234c-1.229.71-2.908.187-3.896-1.213l-8.045-9.183c-2.62-3.564-1.561-8.614 2.269-10.825 3.831-2.212 8.733-.604 10.51 3.447l3.93 11.559c.717 1.556.33 3.271-.899 3.981z"
//               fill="#e15c64"
//             />
//             <path
//               d="M57.016 42.315l-3.869-2.234c-1.229-.71-1.616-2.424-.898-3.981l3.93-11.559c1.776-4.051 6.679-5.659 10.51-3.447 3.831 2.212 4.889 7.261 2.269 10.825l-8.045 9.183c-.989 1.401-2.668 1.923-3.897 1.213z"
//               fill="#e15c64"
//             />
//             <path
//               d="M60.357 47.613l-3.112-5.39c-.989-1.712-.261-4.05 1.689-5.428l12.791-11.207c4.964-3.649 11.999-2.175 15.08 3.161 3.081 5.336.841 12.165-4.802 14.64l-16.101 5.474c-2.167 1.001-4.556.463-5.545-1.25z"
//               fill="#f47e5f"
//             />
//             <path
//               d="M57.246 57.776l3.112-5.39c.989-1.712 3.377-2.251 5.545-1.251l16.101 5.474c5.643 2.475 7.883 9.304 4.802 14.64-3.081 5.336-10.115 6.811-15.08 3.161L58.935 63.204c-1.95-1.377-2.678-3.715-1.689-5.428z"
//               fill="#f47e5f"
//             />
//             <path
//               d="M46.888 60.163h6.223c1.977 0 3.638 1.799 3.856 4.177l3.31 16.681C60.956 87.145 56.162 92.5 50 92.5c-6.162 0-10.956-5.355-10.278-11.479l3.31-16.681c.218-2.378 1.879-4.177 3.856-4.177z"
//               fill="#f47e5f"
//             />
//             <path
//               d="M39.643 52.387l3.112 5.39c.989 1.712.261 4.05-1.689 5.428L28.274 74.411c-4.964 3.649-11.999 2.175-15.08-3.161-3.081-5.336-.841-12.165 4.802-14.64l16.101-5.474c2.168-1 4.557-.462 5.546 1.251z"
//               fill="#f47e5f"
//             />
//             <path
//               d="M42.754 42.224l-3.112 5.39c-.989 1.712-3.377 2.251-5.545 1.251L17.996 43.39c-5.643-2.475-7.883-9.304-4.802-14.64 3.081-5.336 10.115-6.811 15.08-3.161l12.791 11.207c1.95 1.377 2.678 3.715 1.689 5.428z"
//               fill="#f47e5f"
//             />
//             <path
//               d="M53.112 39.837h-6.223c-1.977 0-3.638-1.799-3.856-4.177l-3.31-16.681C39.044 12.855 43.838 7.5 50 7.5c6.162 0 10.956 5.355 10.278 11.479l-3.31 16.681c-.218 2.378-1.879 4.177-3.856 4.177z"
//               fill="#f47e5f"
//             />
//             <circle cx="50" cy="50" r="13.859" fill="#f7b26a" />
//           </svg>
//         </Link>
//       </div>

//       <div
//         className="hidden w-full md:flex md:items-center md:w-auto "
//         id="menu"
//       >
//         <ul
//           className="
//           text-base text-pink-700
//           pt-4
//           md:flex
//           md:justify-between
//           md:pt-0"
//         >
//           <li>
//             <Link
//               className="md:p-4 py-2 block hover:text-purple-400"
//               href="/"
//             >
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link
//               className="md:p-4 py-2 block hover:text-purple-400"
//               href="/about"
//             >
//               About
//             </Link>
//           </li>
//           <li>
//             <Link
//               className="md:p-4 py-2 block hover:text-purple-400"
//               href="/products"
//             >
//               Products
//             </Link>
//           </li>
//           {/* <h1 className="text-3xl font-bold underline"></h1> */}
//         </ul>
//       </div>

//       <svg
//         xmlns="<http://www.w3.org/2000/svg>"
//         id="menu-button"
//         className="h-6 w-6 cursor-pointer md:hidden block"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth="2"
//           d="M4 6h16M4 12h16M4 18h16"
//         />
//       </svg>

//       <Link href="/cart">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth="1.5"
//           stroke="currentColor"
//           className="w-6 h-6 cursor-pointer"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
//           />
//         </svg>
//       </Link>
//     </nav>
//   </header>
// </div>
