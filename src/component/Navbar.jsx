import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  // close menu function
  const handleClose = () => setOpen(false);

  return (
    <nav className="bg-black text-white px-6 py-4 border-b border-gray-800 fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-red-500">GymCenter</h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8">
          <li>
            <a href="#Hero" className="hover:text-red-500">
              Home
            </a>
          </li>
          <li>
            <a href="#programs" className="hover:text-red-500">
              Programs
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-red-500">
              About
            </a>
          </li>
          <li>
            <a href="#trainers" className="hover:text-red-500">
              Trainers
            </a>
          </li>
          <li>
            <a href="#Pricing" className="hover:text-red-500">
              Price-listx
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-red-500">
              Contact
            </a>
          </li>
        </ul>

        {/* Desktop Button */}
        <button className="hidden md:block bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700 transition">
          Join Now
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-3xl"
        >
          {open ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-4 bg-gray-900 rounded-xl p-4 space-y-4">
          <a
            href="#Hero"
            onClick={handleClose}
            className="block hover:text-red-500"
          >
            Home
          </a>

          <a
            href="#programs"
            onClick={handleClose}
            className="block hover:text-red-500"
          >
            Programs
          </a>

          <a
            href="#about"
            onClick={handleClose}
            className="block hover:text-red-500"
          >
            About
          </a>

          <a
            href="#trainers"
            onClick={handleClose}
            className="block hover:text-red-500"
          >
            Trainers
          </a>
          <a
            href="#Priceing"
            onClick={handleClose}
            className="block hover:text-red-500"
          >
            Price-list
          </a>
          <a
            href="#contact"
            onClick={handleClose}
            className="block hover:text-red-500"
          >
            Contact
          </a>

          <button
            onClick={handleClose}
            className="w-full bg-red-600 py-2 rounded-lg hover:bg-red-700 transition"
          >
            Join Now
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
