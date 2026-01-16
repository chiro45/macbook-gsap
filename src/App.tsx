import gsap from "gsap";
import { Hero } from "./components/Hero";
import { NavBar } from "./components/NavBar";
import { ProducViewer } from "./components/ProducViewer";
import { ShowCase } from "./components/ShowCase";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
export const App = () => {
  return (
    <div>
      <main>
        <NavBar />
        <Hero />
        <ProducViewer />
        <ShowCase />
      </main>
    </div>
  );
};
