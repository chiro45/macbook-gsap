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
import { useMediaQuery } from "react-responsive";
import { useMacbookStore } from "./store";
import { useEffect } from "react";
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
