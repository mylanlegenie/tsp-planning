function Burger({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className="flex items-center cursor-pointer h-full select-none"
    >
      {isOpen ? (
        <div className="flex flex-col gap-1">
          <span className="block w-5 h-0.5 bg-white rounded-xl"></span>
          <span className="block w-5 h-0.5 bg-white rounded-xl"></span>
          <span className="block w-5 h-0.5 bg-white rounded-xl"></span>
        </div>
      ) : (
        <div className="relative w-5 h-5">
          <span className="absolute top-1/2 left-1/2 block w-5 h-0.5 bg-white rounded-xl -translate-x-1/2 -translate-y-1/2 rotate-45 "></span>
          <span className="absolute top-1/2 left-1/2 block w-5 h-0.5 bg-white rounded-xl -translate-x-1/2 -translate-y-1/2 -rotate-45 "></span>
        </div>
      )}
    </div>
  );
}

export default Burger;
