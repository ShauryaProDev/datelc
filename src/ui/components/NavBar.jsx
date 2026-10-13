import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="flex w-full items-center justify-between px-8 py-4">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-zinc-900 transition-all duration-300 hover:scale-105 hover:bg-zinc-700">
          <span className="geist-title text-lg tracking-wide text-white">
            D
          </span>
        </div>

        <Link to="/home">
          <h1 className="geist-title text-2xl tracking-tight text-zinc-900">
            Datelc
          </h1>
        </Link>
      </div>

      <div className="flex items-center gap-2">
        <Link to="/home">
          <button className="geist-body rounded-xl  px-4.5 py-2.5 text-md text-zinc-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-zinc-900 hover:text-white cursor-pointer">
            Home
          </button>
        </Link>

        <Link to="/tools">
          <button className="geist-body rounded-xl bg-blue-600 px-4.5 py-2.5 text-md text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 cursor-pointer">
            Tools
          </button>
        </Link>

        <Link to="/features">
          <button className="geist-body rounded-xl bg-emerald-600 px-4.5 py-2.5 text-md text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-700 cursor-pointer">
            Features
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
