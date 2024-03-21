import React from "react";

const Navlinks = () => {
  return (
    <ul className="flex space-x-4">
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/bulk-generator">Generate Bulk QRs</a>
      </li>
      {/* <li>
        <a href="/about">About</a>
      </li> */}
    </ul>
  );
};

export default Navlinks;
