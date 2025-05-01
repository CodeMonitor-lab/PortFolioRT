import React, { useState, useEffect, useRef } from "react";
import { FiSearch, FiX } from "react-icons/fi";
import { ButtonSubmit, Input } from "../index"; // Assuming these are reusable components

const Search = () => {
  const [isOpen, setIsOpen] = useState(false); // Controls visibility of search bar
  const [searchTerm, setSearchTerm] = useState(""); // Holds the search query
  const inputRef = useRef(null);

  const toggleSearch = () => setIsOpen((prev) => !prev); // Toggle search bar visibility

  const handleSearchChange = (event) => setSearchTerm(event.target.value); // Handle input change
  const clearSearch = () => setSearchTerm(""); // Clear the search input

  // Focus the input field automatically when the search bar opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  return (
    <div className="relative">
      {/* Search Bar */}
      <div
        className={`absolute right-0 top-full mt-2 z-50 transition-all duration-300 ease-in-out transform ${
          isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
        } origin-top-right`}
      >
        <div className="flex items-center bg-white border rounded shadow-md w-[90vw] sm:w-[300px] max-w-md">
          <Input
            ref={inputRef}
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="flex-grow border-none pl-3 py-2 outline-none text-sm text-gray-700"
          />
          <ButtonSubmit
            btnText="Search"
            onClick={() => console.log(`Searching for: ${searchTerm}`)}
            className="bg-blue-500 text-white px-3 py-2 rounded-l-none"
          />
          <ButtonSubmit
            className="bg-red-500 px-3 py-2"
            btnText={<FiX size={20} color="#fff" />}
            onClick={clearSearch}
          />
        </div>
      </div>

      {/* Search Icon Button - shows when the search bar is hidden */}
      {!isOpen && (
        <ButtonSubmit
          className="bg-transparent hover:bg-blue-500 p-2 rounded-full"
          btnText={<FiSearch size={22} color="white" />}
          onClick={toggleSearch}
        />
      )}
    </div>
  );
};

export default Search;
