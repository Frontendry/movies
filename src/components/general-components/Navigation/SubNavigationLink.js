// Node Modules
import React from "react";
import { Link } from "react-router-dom";

const SubNavigationLink = ({ name }) => {
  const linkLowerCased = name.toLowerCase();
  return (
    <li>
      <Link
        to={`/genre/${linkLowerCased}`}
        className="p-3 border-b border-slate-400 block"
      >
        {name}
      </Link>
    </li>
  );
};

export default SubNavigationLink;
