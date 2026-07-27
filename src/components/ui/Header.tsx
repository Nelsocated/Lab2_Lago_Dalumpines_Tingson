const Header = () => {
  return (
    <header className="w-full h-20 bg-white border-b border-black py-1 px-5 flex items-center justify-between">
      <div className="flex items-center">
        <div className="w-20 h-20 rounded-xl flex items-center justify-between">
          <img
            src="/Gearhub.svg"
            alt="GearHub Logo"
            width={300}
            height={300}
          ></img>
        </div>
        <h1 className="text-2xl font-montserrat font-bold text-black">
          GearHub
        </h1>
      </div>
      <div className="flex items-center space-x-3 mt-2">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="w-64 px-5 py-1.5 text-xs font-mono border border-gray-300 rounded-lg uppercase tracking-wide placeholder-gray-400 focus:outline-none focus:border-orange-500"
          ></input>
        </div>
        <button className=" hover:bg-gray-100 rounded-full transition-colors duration-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m21 21-4.34-4.34" />
            <circle cx="11" cy="11" r="8" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
