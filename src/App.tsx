import { Hero } from "./components/Hero";
import { NavBar } from "./components/NavBar";

export const App = () => {
  return (
    <div>
      <main>
        <NavBar/>
        <Hero/>
      </main>
    </div>
  );
};
