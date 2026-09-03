import React from 'react';
import { useSelector } from 'react-redux';
import ShapeRenderer from './ShapeRenderer';

function Scene() {
  const objects = useSelector(state => state.model.objects);
  const selectedObject = useSelector(state => state.model.selectedObject);

  return (
    <group>
      {objects.map(obj => (
        <ShapeRenderer
          key={obj.id}
          object={obj}
          isSelected={selectedObject === obj.id}
        />
      ))}
    </group>
  );
}

export default Scene;