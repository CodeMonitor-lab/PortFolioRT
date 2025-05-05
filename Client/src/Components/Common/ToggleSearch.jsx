import React, { useState, useEffect, useRef } from "react";
import { FiSearch, FiX } from "react-icons/fi";
import { ButtonSubmit, Input,Search } from "../index"; // Assuming thef

const ToggleSearch = () => {

  return (
    <>
    <main>
      <section>
        <search>
          <Search/>
          <FiSearch/>
        </search>
      </section>
    </main>
    </>
  );
};

export default ToggleSearch;
