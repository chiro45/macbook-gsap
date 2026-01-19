import gsap from "gsap";
import { Hero } from "./components/Hero";
import { NavBar } from "./components/NavBar";
import { ProducViewer } from "./components/ProducViewer";
import { ShowCase } from "./components/ShowCase";
import { ScrollTrigger } from "gsap/all";
import { Performance } from "./components/Performance";
import { Features } from "./components/Features";
import { HightLights } from "./components/HighLights";
import { Footer } from "./components/Footer";
gsap.registerPlugin(ScrollTrigger);
export const App = () => {
  return (
    <div>
      <main>
        <NavBar />
        <Hero />
        <ProducViewer />
        <ShowCase />
        <Performance />
        <Features />
        <HightLights />
        <Footer />
      </main>
    </div>
  );
};
