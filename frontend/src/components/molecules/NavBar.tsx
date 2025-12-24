import type { Dispatch, SetStateAction } from "react";
import Burger from "../icons/BurgerIcon";
import { Link } from "react-router-dom";
function NavBar({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <nav className="flex flex-row w-full h-[5vh]">
      <div className="bg-sky-700 px-4 py-2 w-3xs">
        <Link to="/">
          <h1 className="text-white text-xl text-center m-auto">
            Planning TSP
          </h1>
        </Link>
      </div>
      <div className="bg-sky-600 px-4 flex flex-6 items-center gap-2 ml-auto">
        <Burger onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />
        <input
          type="search"
          placeholder="Filtrer (Nom de client, dossier, …)"
          className="bg-white ml-2 w-2xs px-3 py-1 rounded border-0 outline-none "
        />
      </div>
    </nav>
  );
}

export default NavBar;
