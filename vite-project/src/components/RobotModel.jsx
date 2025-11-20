import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, ContactShadows, useGLTF } from "@react-three/drei";
import { useRef, useState } from "react";

function Robot(props) {
  const { scene } = useGLTF("/robot/scene.gltf");
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  const mouse = useRef({ x: 0, y: 0 }); // track mouse position

  // Track mouse movement
  const handleMouseMove = (event) => {
    // Normalize mouse position between -1 and 1
    const x = (event.clientX / window.innerWidth) * 2 - 1;
    const y = -(event.clientY / window.innerHeight) * 2 + 1;
    mouse.current = { x, y };
  };

  // Add event listener for mouse move
  if (typeof window !== "undefined") {
    window.addEventListener("mousemove", handleMouseMove);
  }

  // Continuous floating + rotation animation
  useFrame((state) => {
    if (meshRef.current) {
      // Gentle floating motion
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2 - 1.5;

      // Rotate robot in the direction of cursor movement (smoothed)
      const targetRotationY = -Math.PI / 2 + mouse.current.x * 0.5; // base + horizontal follow
      const targetRotationX = mouse.current.y * 0.2; // vertical tilt
      meshRef.current.rotation.y += (targetRotationY - meshRef.current.rotation.y) * 0.05;
      meshRef.current.rotation.x += (targetRotationX - meshRef.current.rotation.x) * 0.05;

      // Scale animation on hover
      const targetScale = hovered ? 14 : 13;
      meshRef.current.scale.lerp({ x: targetScale, y: targetScale, z: targetScale }, 0.1);
    }
  });

  return (
    <group
      ref={meshRef}
      scale={13}
      position={[0, -1.5, 0]} // 👈 lowered further
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      {...props}
    >
      <primitive object={scene} />
    </group>
  );
}

function CameraAnimation() {
  useFrame(({ camera, clock }) => {
    const t = clock.getElapsedTime();
    // Gentle camera movement
    camera.position.x = Math.sin(t * 0.2) * 0.3;
    camera.position.y = Math.sin(t * 0.15) * 0.2;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

export const RobotModel = () => {
  return (
    <div className="w-full h-[400px] md:h-[500px]">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        {/* Ambient and directional lighting */}
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          intensity={0.8}
        />

        {/* Robot with animations */}
        <Robot />

        {/* Environment for glow effect */}
        <Environment preset="sunset" />

        {/* Contact shadows for depth */}
        <ContactShadows
          position={[0, -2, 0]}
          opacity={0.5}
          scale={10}
          blur={2}
          far={4}
        />

        {/* Custom camera animation */}
        <CameraAnimation />
      </Canvas>
    </div>
  );
};
