import { Hero } from "./components/Hero";
import { NavBar } from "./components/NavBar";
import { ProducViewer } from "./components/ProducViewer";

export const App = () => {
  return (
    <div>
      <main>
        <NavBar />
        <Hero />
        <ProducViewer />
      </main>
    </div>
  );
};
