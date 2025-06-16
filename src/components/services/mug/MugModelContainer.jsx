import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { MugModel } from "./MugModel";
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";

const MugModelContainer = () => {
  return (
    <Canvas>
      <Suspense fallback="loading...">
        <Stage environment="sunset" intensity={1}>
          <MugModel />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate/>
        <PerspectiveCamera position={[2,1,2]} zoom={0.9} makeDefault/>
      </Suspense>
    </Canvas>
  );
};

export default MugModelContainer;