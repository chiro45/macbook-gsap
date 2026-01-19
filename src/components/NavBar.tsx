import { navLinks } from "../constants";

export const NavBar = () => {
  return (
    <header>
      <nav>
        <img src="/icons/logo.svg" about="Apple logo" />
        <ul>
          {navLinks.map(({ label, route }) => (
            <li key={label}>
              <a href={route}>{label}</a>
            </li>
          ))}
        </ul>
        <div className="flex-center gap-3">
          <button>
            <img src="/icons/search.svg" alt="Search" />
          </button>
          <button>
            <img src="/icons/cart.svg" alt="Cart" />
          </button>
        </div>
      </nav>
    </header>
  );
};
