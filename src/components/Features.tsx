import { Canvas } from "@react-three/fiber";
import { StudioLigths } from "./three/StudioLigths";
import { features, featureSequence, PI } from "../constants";
import clsx from "clsx";
import { Suspense, useEffect, useRef } from "react";
import { Html } from "@react-three/drei";
import { ModelMacbook } from "./models/Macbook";
import { useMacbookStore } from "../store";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import type { Group } from "three";

const ModelScroll = () => {
  const groupRef = useRef<null | Group>(null);
  const isMobile = useMacbookStore((state) => state.isMobile);

  const { setTexture } = useMacbookStore();

  //preload all feature videos during component mount
  useEffect(() => {
    featureSequence.forEach((feature) => {
      const v = document.createElement("video");
      Object.assign(v, {
        src: feature.videoPath,
        muted: true,
        playsIniline: true,
        preload: "auto",
        crosOrigins: "auto",
      });
    });
  }, []);

  useGSAP(() => {
    //3d model rotation animation
    const modelTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#f-canvas",
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: true,
      },
    });
    //sync th feature content
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#f-canvas",
        start: "top center",
        end: "bottom top",
        scrub: 1,
      },
    });

    if (groupRef.current) {
      modelTimeline.to(groupRef.current.rotation, {
        y: PI * 2,
        ease: "power1.inOut",
      });
    }
    //content & texture sync
    timeline
      .call(() => setTexture("/videos/feature-1.mp4"))
      .to(".box1", { opacity: 1, y: 0, delay: 1 })
      .call(() => setTexture("/videos/feature-2.mp4"))
      .to(".box2", { opacity: 1, y: 0 })
      .call(() => setTexture("/videos/feature-3.mp4"))
      .to(".box3", { opacity: 1, y: 0 })
      .call(() => setTexture("/videos/feature-4.mp4"))
      .to(".box4", { opacity: 1, y: 0 })
      .call(() => setTexture("/videos/feature-5.mp4"))
      .to(".box5", { opacity: 1, y: 0 });
  }, []);
  return (
    <group ref={groupRef}>
      <Suspense
        fallback={
          <Html>
            <h1 className="text-white text-3xl uppercase">Loading...</h1>
          </Html>
        }
      >
        <ModelMacbook scale={isMobile ? 0.05 : 0.08} position={[0, -1, 0]} />
      </Suspense>
    </group>
  );
};

export const Features = () => {
  return (
    <section id="features">
      <h2>See it all in a new light.</h2>
      <Canvas id="f-canvas" camera={{}}>
        <StudioLigths />
        <ambientLight intensity={0.5} />
        <ModelScroll />
      </Canvas>
      <div className="absolute inset-0">
        {features.map((feature, index) => (
          <div
            key={feature.id}
            className={clsx("box", `box${index + 1}`, feature.styles)}
          >
            <img src={feature.icon} alt={feature.highlight} />
            <p>
              <span className="text-white">{feature.highlight}</span>
              {feature.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
