import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <ul className="ml-auto grid grid-flow-col auto-cols-max gap-x-5 text-white uppercase text-sm tracking-widest">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>Genre</li>
    </ul>
  );
};

export default Navigation;
