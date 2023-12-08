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
const myMesh = React.useRef();
function Cubes(){

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    myMesh.current.rotation.x = a;
    myMesh.current.rotation.y = a;
  });

  return (
    <instancedMesh args={[null, null, 10]}>
      <torusKnotGeometry args={[7, 3, 100, 16]}></torusKnotGeometry>
      <meshPhongMaterial color="tomato" />
    </instancedMesh>
  );
};


export const ProjectsPage = () => {
  return (
    <div style={{height:"100vh"}}>
      <Canvas alpha={true} camera={{position: [0, 20, 0] }}>
          <OrbitControls />
          <AsciiRenderer fgColor="white" bgColor="transparent"/>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 15, 10]} intensity={1}/>
          <Cubes />
      </Canvas>
    </div>
  )
}

export default ProjectsPage;
