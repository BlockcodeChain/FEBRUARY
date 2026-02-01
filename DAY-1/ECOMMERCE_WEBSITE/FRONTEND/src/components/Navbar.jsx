import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MapPin, Menu, X } from "lucide-react";
import { IoCartOutline } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa6";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const Navbar = () => {

  // ===== ADDRESS STATES =====
  const [location, setLocation] = useState("");
  const [showAddressBox, setShowAddressBox] = useState(false);
  const [tempAddress, setTempAddress] = useState("");
  const [loading, setLoading] = useState(false);

  const [cartCount] = useState(4);
  const [open, setOpen] = useState(false);

  const navItems = [
    { path: "/", name: "Home" },
    { path: "/products", name: "Products" },
    { path: "/about", name: "About" },
    { path: "/contact", name: "Contact" },
  ];

  // ===== GEOLOCATION FUNCTION =====
  const getLiveAddress = () => {
    if (!navigator.geolocation) {
      alert("Geolocation not supported in your browser");
      return;
    }

    setLoading(true);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        const API_KEY = import.meta.env.VITE_OPEN_CAGE_KEY;

        const url =
          `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${API_KEY}`;

        try {
          const res = await fetch(url);
          const data = await res.json();

          const address =
            data?.results?.[0]?.formatted || "Address not found";

          setTempAddress(address);
        } catch (err) {
          alert("Error fetching address");
        }

        setLoading(false);
      },

      () => {
        alert("Location permission denied");
        setLoading(false);
      }
    );
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black text-white border-b border-white/10 shadow-md">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-5 md:px-10 py-4">

        {/* LOGO + LOCATION */}
        <div className="flex items-center gap-4 md:gap-10">
          <Link to="/">
            <h1 className="text-[26px] font-extrabold tracking-wide">
              <span className="bg-linear-to-r from-orange-500 to-amber-400 text-transparent bg-clip-text">
                E.
              </span>
              FOX
            </h1>
          </Link>

          {/* Desktop Location */}
          <div
            onClick={() => setShowAddressBox(true)}
            className="hidden md:flex items-center gap-2 cursor-pointer text-gray-300 hover:text-white transition-all"
          >
            <MapPin className="w-5 h-5 text-orange-500" />
            <span className="text-[15px] font-medium tracking-wide">
              {location || "Add Address"}
            </span>
            <FaCaretDown />
          </div>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-10 font-mono text-md">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-orange-500 text-white pb-1"
                  : "text-gray-300 hover:text-orange-400 transition-all"
              }
            >
              {item.name} 
            </NavLink>
          ))}
        </div>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-4 md:gap-7">

          {/* CART */}
          <div className="relative">
            <Link to="/cart">
              <IoCartOutline className="h-8 w-8 hover:text-orange-400 transition" />
            </Link>

            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-orange-600 text-white text-[11px] font-bold rounded-full px-1.75 py-px">
                {cartCount}
              </span>
            )}
          </div>

          {/* AUTH */}
          <SignedOut>
            <SignInButton>
              <button className="cl bg-orange-600 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-sm font-semibold hover:bg-orange-700 transition-all">
                Login
              </button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>

          {/* MOBILE MENU TOGGLE */}
          <div className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-black border-t border-white/10 px-5 py-4">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "border-l-4 border-orange-500 pl-2 text-white font-semibold"
                    : "text-gray-300 hover:text-orange-400 transition-all pl-2"
                }
              >
                {item.name}
              </NavLink>
            ))}

            {/* MOBILE LOCATION */}
            <div
              onClick={() => {
                setShowAddressBox(true);
                setOpen(false);
              }}
              className="flex items-center gap-2 cursor-pointer text-gray-300 hover:text-white transition-all mt-2"
            >
              <MapPin className="w-5 h-5 text-orange-500" />
              <span className="text-[15px] font-medium tracking-wide">
                {location || "Add Address"}
              </span>
              <FaCaretDown />
            </div>
          </div>
        </div>
      )}

      {/* ===== ADDRESS MODAL ===== */}
      {showAddressBox && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

          <div className="bg-zinc-900 p-5 rounded-lg w-[90%] md:w-100">

            <h2 className="text-lg font-semibold mb-3">
              Add Your Address
            </h2>

            <input
              value={tempAddress}
              onChange={(e) => setTempAddress(e.target.value)}
              className="w-full p-2 rounded bg-black border"
              placeholder="Enter address..."
            />

            <button
              onClick={getLiveAddress}
              className="w-full mt-2 px-4 py-2 rounded bg-green-600"
            >
              {loading ? "Fetching..." : "Use My Current Location 📍"}
            </button>

            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={() => setShowAddressBox(false)}
                className="px-4 py-1 rounded bg-gray-700"
              >
                Cancel
              </button>

              <button
                onClick={() => {
                  setLocation(tempAddress);
                  setShowAddressBox(false);
                }}
                className="px-4 py-1 rounded bg-orange-600"
              >
                Save
              </button>
            </div>

          </div>
        </div>
      )}

    </nav>
  );
};

export default Navbar;
