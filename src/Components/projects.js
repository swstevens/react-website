import React from "react";
// import Resume from "./Resume";

// import "../App.css";
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from "@react-three/drei";
// const geometry = new THREE.BoxGeometry( 1, 1, 1 ); 
// const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} ); 
// const cube = new THREE.Mesh( geometry, material ); 
// scene.add( cube );
// const Cube = () => {
//   const mesh = useRef();
//   return (
//     <mesh ref={mesh}>
//       <boxGeometry args={[1, 1, 1]} />
//       <meshBasicMaterial color={0xffffff} />
//     </mesh>
//   );
// };

// export const ProjectsPage = (data) => {
//   return (
//     <div className="projectPage">
//       <Resume data={data.data.resume} />
//       <Canvas>
//         <Cube />
//       </Canvas>
//     </div>
//   )
// }
function Box () {
  return (
    <mesh>
      <meshLambertMaterial attach='material' color='hotpink' />
      <boxGeometry args={[2, 2, 2]} />
    </mesh>
  )
}
export const ProjectsPage = () => {
  return (
    <Canvas>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <Box />
    </Canvas>
  )
}


export default ProjectsPage;
