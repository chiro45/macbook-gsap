import { Canvas } from "@react-three/fiber";
import clsx from "clsx";
import { useMacbookStore } from "../store";
import { ModelSwitcher } from "./three/ModelSwitcher";
import { StudioLigths } from "./three/StudioLigths";
export const ProducViewer = () => {
  const { color, scale, setColor, setScale, isMobile } = useMacbookStore();

  return (
    <section id="product-viewer">
      <h2>Take a closer look.</h2>
      <div className="controls">
        <p className="info">Macbook Pro | Available in 14" & 16" in Space gray & Dark colors</p>
        <div className="flex-center gap-5 mt-5">
          <div className="color-control">
            <button
              type="button"
              onClick={() => setColor("#adb5db")}
              className={clsx("bg-neutral-300", color === "#adb5db" && "active")}
            ></button>
            <button
              type="button"
              onClick={() => setColor("#2e2c2e")}
              className={clsx("bg-neutral-900", color === "#2e2c2e" && "active")}
            ></button>
          </div>
          <div className="size-control">
            <button
              type="button"
              onClick={() => setScale(0.06)}
              className={clsx(scale === 0.06 ? "bg-white text-black" : "bg-transparent text-white")}
            >
              <p>14"</p>
            </button>
            <button
              type="button"
              onClick={() => setScale(0.08)}
              className={clsx(scale === 0.08 ? "bg-white text-black" : "bg-transparent text-white")}
            >
              <p>16"</p>
            </button>
          </div>
        </div>
      </div>
      <Canvas id="canvas" camera={{ position: [0, 2, 5], fov: 50, near: 0.1, far: 100 }}>
        <StudioLigths />

        <ModelSwitcher scale={isMobile ? scale - 0.3 : scale} isMobile={isMobile} />
      </Canvas>
    </section>
  );
};
