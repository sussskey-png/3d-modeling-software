import React from 'react';

function ShapeRenderer({ object, isSelected }) {
  const shapeProps = {
    position: object.position,
    rotation: object.rotation,
    scale: object.scale,
  };

  const materialProps = {
    color: isSelected ? '#ff6b6b' : '#3498db',
    wireframe: false,
  };

  switch (object.type) {
    case 'cube':
      return (
        <mesh {...shapeProps}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial {...materialProps} />
        </mesh>
      );
    case 'sphere':
      return (
        <mesh {...shapeProps}>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial {...materialProps} />
        </mesh>
      );
    case 'cylinder':
      return (
        <mesh {...shapeProps}>
          <cylinderGeometry args={[0.5, 0.5, 1, 32]} />
          <meshStandardMaterial {...materialProps} />
        </mesh>
      );
    case 'cone':
      return (
        <mesh {...shapeProps}>
          <coneGeometry args={[0.5, 1, 32]} />
          <meshStandardMaterial {...materialProps} />
        </mesh>
      );
    default:
      return null;
  }
}

export default ShapeRenderer;