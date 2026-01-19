import { useGSAP } from "@gsap/react";
import { PresentationControls } from "@react-three/drei";
import gsap from "gsap";
import { type FC, useEffect, useRef } from "react";
import { type Group, Mesh } from "three";
import { PI } from "../../constants";
import MacbookModel14 from "../models/Macbook-14";
import MacbookModel16 from "../models/Macbook-16";

type Props = {
  scale: number;
  isMobile: boolean;
};

const ANIMATION_DURATION = 1;
const OFFSET_DISTANCE = 8;

const fadeMeshes = (group: Group | null, opacity: number) => {
  if (!group) return;

  group.traverse((child) => {
    if (child instanceof Mesh) {
      child.material.transparent = true;
      gsap.to(child.material, { opacity, duration: ANIMATION_DURATION });
    }
  });
};

const moveGroup = (group: Group | null, x: number) => {
  if (!group) return;
  gsap.to(group.position, { x, duration: ANIMATION_DURATION });
};

const SCALE_LARGE_DESKTOP = 0.08;
const SCALE_LARGE_MOBILE = 0.05;

export const ModelSwitcher: FC<Props> = ({ scale, isMobile }) => {
  const largeMacbookRef = useRef<Group | null>(null);
  const smallMacbookRef = useRef<Group | null>(null);

  const showLargeMacbook = scale === SCALE_LARGE_DESKTOP || scale === SCALE_LARGE_MOBILE;

  // Establecer posiciones iniciales sin animación
  useEffect(() => {
    if (largeMacbookRef.current && smallMacbookRef.current) {
      if (showLargeMacbook) {
        largeMacbookRef.current.position.x = 0;
        smallMacbookRef.current.position.x = -OFFSET_DISTANCE;
        smallMacbookRef.current.traverse((child) => {
          if (child instanceof Mesh) {
            child.material.opacity = 0;
          }
        });
        largeMacbookRef.current.traverse((child) => {
          if (child instanceof Mesh) {
            child.material.opacity = 1;
          }
        });
      } else {
        largeMacbookRef.current.position.x = OFFSET_DISTANCE;
        smallMacbookRef.current.position.x = 0;
        smallMacbookRef.current.traverse((child) => {
          if (child instanceof Mesh) {
            child.material.opacity = 1;
          }
        });
        largeMacbookRef.current.traverse((child) => {
          if (child instanceof Mesh) {
            child.material.opacity = 0;
          }
        });
      }
    }
  }, [showLargeMacbook]); // Solo en mount

  useGSAP(() => {
    if (showLargeMacbook) {
      moveGroup(smallMacbookRef.current, -OFFSET_DISTANCE);
      moveGroup(largeMacbookRef.current, 0);

      fadeMeshes(smallMacbookRef.current, 0);
      fadeMeshes(largeMacbookRef.current, 1);
    } else {
      moveGroup(smallMacbookRef.current, 0);
      moveGroup(largeMacbookRef.current, OFFSET_DISTANCE);

      fadeMeshes(smallMacbookRef.current, 1);
      fadeMeshes(largeMacbookRef.current, 0);
    }
  }, [scale]);

  const controlsConfig = {
    snap: true,
    speed: 1,
    zoom: 1,
    azimuth: [0, PI * 2] as [number, number],
    config: { mass: 1, tension: 0, friction: 26 },
  };

  return (
    <>
      <PresentationControls {...controlsConfig}>
        <group ref={largeMacbookRef}>
          <MacbookModel16 scale={isMobile ? 0.05 : 0.08} />
        </group>
      </PresentationControls>

      <PresentationControls {...controlsConfig}>
        <group ref={smallMacbookRef}>
          <MacbookModel14 scale={isMobile ? 0.03 : 0.06} />
        </group>
      </PresentationControls>
    </>
  );
};
