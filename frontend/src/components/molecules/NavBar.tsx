import Burger from "../icons/Burger";
import { useState } from "react";
function NavBar() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <nav className="flex flex-row w-full">
      <div className="bg-sky-600 px-4 py-2 flex-1">
        <h1 className="text-white text-2xl text-center">Planning TSP</h1>
      </div>
      <div className="bg-sky-500 px-4 py-2 flex-6">
        <Burger onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />
      </div>
    </nav>
  );
}

export default NavBar;
