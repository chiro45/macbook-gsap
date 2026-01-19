import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { HightLights } from "./components/HighLights";
import { NavBar } from "./components/NavBar";
import { Performance } from "./components/Performance";
import { ProducViewer } from "./components/ProducViewer";
import { ShowCase } from "./components/ShowCase";
import { useMacbookStore } from "./store";

gsap.registerPlugin(ScrollTrigger);
export const App = () => {
  const setIsMobile = useMacbookStore((state) => state.setIsMobile);
  const isMobile = useMediaQuery({ query: "(max-width:1024px)" });

  useEffect(() => {
    setIsMobile(isMobile);
  }, [isMobile, setIsMobile]);

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
