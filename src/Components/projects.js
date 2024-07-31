import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { AsciiRenderer, OrbitControls } from "@react-three/drei";

function Box () {
  return (
    <mesh>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial roughness={0.2} metalness={.1} color={'hotpink'}/> 
    </mesh>
  )
}

function TorusKnot(){
  const ref = React.useRef()
  useFrame((state, delta) => (ref.current.rotation.x = ref.current.rotation.y += delta / 2))
 
  return (
    <instancedMesh args={[null, null, 10]} ref={ref}>
      <torusKnotGeometry args={[7, 3, 100, 16]}></torusKnotGeometry>
      <meshPhongMaterial color="tomato" />
    </instancedMesh>
  );
};


export const ProjectsPage = () => {
  return (
    <div style={{height:"100vh"}}>
      <Canvas alpha={true} camera={{position: [0, 25, 0] }}>
          <OrbitControls />
          <color attach="background" args={['black']} />
          <AsciiRenderer fgColor="white" bgColor="transparent"/>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 15, 10]} intensity={1}/>
          <TorusKnot />
      </Canvas>
    </div>
  )
}

export default ProjectsPage;
