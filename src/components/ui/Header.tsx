import { useActions } from "../state/useActions";
import { useEffect, useState } from "react";

const Header = () => {
  const { setFilters } = useActions();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const scrollEl = document.getElementById("scroll-container") ?? window;
    console.log(
      "Listening on:",
      scrollEl === window ? "window" : "#scroll-container",
    );
    const onScroll = () => {
      const y =
        scrollEl === window
          ? window.scrollY
          : (scrollEl as HTMLElement).scrollTop;
      setScrolled(y > 20);
    };
    scrollEl.addEventListener("scroll", onScroll);
    return () => scrollEl.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 flex h-20 w-full items-center justify-between px-12 lg:px-20 transition-colors duration-300 ${
        scrolled
          ? "bg-gradient-to-b from-black via-black/80 to-black/60 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <button
        type="button"
        onClick={() => setFilters({ searchQuery: "" })}
        className="flex items-center gap-2.5 group"
      >
        <div className="w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-105">
          <img
            src="/favicon/Gearhub.svg"
            alt="GearHub Logo"
            width={100}
            height={100}
          ></img>
        </div>
        <h1
          className={`text-xl font-montserrat font-bold tracking-tight transition-colors text-white`}
        >
          GearHub
        </h1>
      </button>
      <div className="flex items-center flex-1 justify-end">
        <div className="relative w-full max-w-sm flex items-center">
          <input
            type="text"
            placeholder="Search products"
            onChange={(e) => setFilters({ searchQuery: e.target.value })}
            className="w-full pl-4 pr-10 py-1.5 text-sm bg-white text-neutral-800 rounded-full shadow-sm placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
          ></input>
          <button
            type="button"
            className="absolute right-1 flex items-center justify-center w-7 h-7 rounded-full text-neutral-400 hover:text-primary hover:bg-neutral-100 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
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
