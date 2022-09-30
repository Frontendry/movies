// React Router
import { Link } from "react-router-dom";

// Context Store
import { useFilmsContext } from "../../../context/filmsContextStore";
import SubNavigation from "./subNavigation";

const Navigation = () => {
  const { allGenres } = useFilmsContext();
  return (
    <ul className="ml-auto grid grid-flow-col auto-cols-max gap-x-10 text-white uppercase text-sm tracking-widest leading-10">
      <li className="">
        <Link to="/" className="block">
          Home
        </Link>
      </li>
      <li className="has-dropdown">
        <span className="block">Genre</span>
        <SubNavigation subItems={allGenres} />
      </li>
    </ul>
  );
};

export default Navigation;
