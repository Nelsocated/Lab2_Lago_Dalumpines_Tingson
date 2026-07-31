import { useActions } from "../state/useActions";

const Header = () => {
  const { setFilters } = useActions();
  return (
    <header className="w-full h-20 bg-black py-1 px-6 flex items-center justify-between gap-8 shadow-md relative z-10">
      <button
        type="button"
        onClick={() => setFilters({ searchQuery: "" })}
        className="flex items-center gap-2.5 group"
      >
        <div className="w-20 h-20 rounded-xl flex items-center justify-center">
          <img
            src="/favicon/Gearhub.svg"
            alt="GearHub Logo"
            width={300}
            height={300}
          ></img>
        </div>
        <h1 className="text-2xl font-montserrat font-bold text-white tracking-tight">
          GearHub
        </h1>
      </button>
      <div className="flex items-center flex-1 justify-end">
        <div className="relative w-full max-w-sm flex items-center">
          <input
            type="text"
            placeholder="Search products"
            onChange={(e) => setFilters({ searchQuery: e.target.value })}
            className="w-full pl-4 pr-10 py-2 text-sm bg-neutral-800 border border-neutral-700 rounded-full text-white placeholder-neutral-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-colors"
          ></input>
          <button
            type="button"
            className="absolute right-1 flex items-center justify-center w-8 h-8 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m21 21-4.34-4.34" />
              <circle cx="11" cy="11" r="8" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;