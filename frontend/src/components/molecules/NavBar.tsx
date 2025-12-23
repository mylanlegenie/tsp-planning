import Burger from "../icons/BurgerIcon";
function NavBar({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  return (
    <nav className="flex flex-row w-full h-[5vh]">
      <div className="bg-sky-600 px-4 py-2 flex-1">
        <h1 className="text-white text-2xl text-center">Planning TSP</h1>
      </div>
      <div className="bg-sky-500 px-4 flex flex-6 items-center gap-2 ml-auto">
        <Burger onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />
        <input
          type="search"
          placeholder="Filtrer (Nom de client, dossier, …)"
          className="bg-white ml-2 w-2xs px-3 py-1 rounded "
        />
      </div>
    </nav>
  );
}

export default NavBar;
