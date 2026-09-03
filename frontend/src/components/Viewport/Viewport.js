import React from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls, Grid, AxesHelper } from '@react-three/drei';
import { useSelector } from 'react-redux';
import Scene from './Scene';
import './Viewport.css';

function Viewport() {
  const showGrid = useSelector(state => state.ui.showGrid);
  const showAxes = useSelector(state => state.ui.showAxes);

  return (
    <div className="viewport">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <OrbitControls />
        {showGrid && <Grid args={[10, 10]} />}
        {showAxes && <AxesHelper args={[5]} />}
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <Scene />
      </Canvas>
      <div className="viewport-info">
        <small>Drag to rotate • Scroll to zoom • Right-click to pan</small>
      </div>
    </div>
  );
}

export default Viewport;