import { Environment, Lightformer } from "@react-three/drei";
import { PI } from "../../constants";

export const StudioLigths = () => {
  return (
    <group name="lights">
      <Environment resolution={256}>
        <Lightformer
          intensity={10}
          form="rect"
          position={[-10, 5, -5]}
          scale={10}
          rotation-y={PI / 2}
        />
        <Lightformer
          intensity={10}
          form="rect"
          position={[10, 0, 1]}
          scale={10}
          rotation-y={PI / 2}
        />
      </Environment>
      <spotLight position={[-2, 0, 5]} angle={0.15} decay={0} intensity={PI * 0.2} />
      <spotLight position={[0, -25, 10]} angle={0.15} decay={0} intensity={PI * 0.2} />
      <spotLight position={[0, 15, 5]} angle={0.15} decay={0.1} intensity={PI * 1} />
    </group>
  );
};
