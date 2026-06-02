// import { Link } from "react-router-dom";

// function Navbar() {
//   return (
//     <nav className="bg-blue-600 text-white p-4">
//       <ul className="flex gap-6">
//         <li>
//           <Link to="/">Home</Link>
//         </li>

//         <li>
//           <Link to="/about">About</Link>
//         </li>

//         <li>
//           <Link to="/blog">Blog</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;


import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <nav
        aria-label="Main Navigation"
        className="bg-blue-600 text-white p-4"
      >
        <ul className="flex gap-6">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li>
            <NavLink to="/about">About</NavLink>
          </li>

          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;