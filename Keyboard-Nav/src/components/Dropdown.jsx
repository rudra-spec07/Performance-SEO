// import { useState } from "react";

// export default function Dropdown() {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="relative w-52">
//       {/* <div
//         className="bg-slate-900 text-white px-4 py-3 rounded cursor-pointer"
//         onClick={() => setOpen(!open)}
//       >
//         Profile ▼
//       </div> */}

//             <button
//         className="bg-slate-900 text-white px-4 py-3 rounded cursor-pointer w-full text-left"
//         onClick={() => setOpen(!open)}
//         >
//         Profile ▼
//         </button>

//       {open && (
//         // <div className="absolute mt-2 w-full bg-white border rounded shadow">
//         //   <div className="px-4 py-3 hover:bg-slate-100 cursor-pointer">
//         //     Profile
//         //   </div>

//         //   <div className="px-4 py-3 hover:bg-slate-100 cursor-pointer">
//         //     Settings
//         //   </div>

//         //   <div className="px-4 py-3 hover:bg-slate-100 cursor-pointer">
//         //     Logout
//         //   </div>
//         // </div>

//                 <ul className="absolute mt-2 w-full bg-white border rounded shadow">
//         <li>
//             <a
//             href="/profile"
//             className="block px-4 py-3 hover:bg-slate-100 focus:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//             Profile
//             </a>
//         </li>

//         <li>
//             <a
//             href="/settings"
//             className="block px-4 py-3 hover:bg-slate-100 focus:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//             Settings
//             </a>
//         </li>

//         <li>
//             <button
//             className="w-full text-left px-4 py-3 hover:bg-slate-100 focus:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//             Logout
//             </button>
//         </li>
//         </ul>
//       )}
//     </div>
//   );
// }


//Advance technique using useRef()

import { useEffect, useRef, useState } from "react";

export default function Dropdown() {
  const [open, setOpen] = useState(false);

  const buttonRef = useRef(null);
  const itemRefs = useRef([]);

  const menuItems = [
    { label: "Profile", href: "#" },
    { label: "Settings", href: "#" },
    { label: "Logout", action: true },
  ];

  useEffect(() => {
    if (open) {
      itemRefs.current[0]?.focus();
    }
  }, [open]);

  const handleKeyDown = (e, index) => {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        itemRefs.current[
          (index + 1) % menuItems.length
        ]?.focus();
        break;

      case "ArrowUp":
        e.preventDefault();
        itemRefs.current[
          (index - 1 + menuItems.length) % menuItems.length
        ]?.focus();
        break;

      case "Escape":
        e.preventDefault();
        setOpen(false);
        buttonRef.current?.focus();
        break;

      default:
        break;
    }
  };

  return (
    <div className="relative w-56">
      {/* Trigger */}
      <button
        ref={buttonRef}
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="menu"
        aria-expanded={open}
        className="w-full bg-slate-900 text-white px-4 py-3 rounded text-left
        focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Profile ▼
      </button>

      {/* Menu */}
      {open && (
        <ul className="absolute mt-2 w-full bg-white border rounded shadow bg-white z-10">
          {menuItems.map((item, index) => (
            <li key={item.label}>
              {item.href ? (
                <a
                  href={item.href}
                  ref={(el) => (itemRefs.current[index] = el)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 hover:bg-slate-100
                  focus:bg-slate-100 focus:outline-none
                  focus:ring-2 focus:ring-blue-500"
                >
                  {item.label}
                </a>
              ) : (
                <button
                  ref={(el) => (itemRefs.current[index] = el)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  onClick={() => {
                    alert("Logged out");
                    setOpen(false);
                    buttonRef.current?.focus();
                  }}
                  className="w-full text-left px-4 py-3 hover:bg-slate-100
                  focus:bg-slate-100 focus:outline-none
                  focus:ring-2 focus:ring-blue-500"
                >
                  {item.label}
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}