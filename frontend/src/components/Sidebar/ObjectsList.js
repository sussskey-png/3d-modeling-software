import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectObject, removeObject } from '../../stores/slices/modelSlice';
import './ObjectsList.css';

function ObjectsList() {
  const objects = useSelector(state => state.model.objects);
  const selectedObject = useSelector(state => state.model.selectedObject);
  const dispatch = useDispatch();

  return (
    <div className="objects-list">
      {objects.length === 0 ? (
        <p className="empty-state">No objects in the scene yet. Add one using the toolbar above.</p>
      ) : (
        <ul>
          {objects.map(obj => (
            <li
              key={obj.id}
              className={`object-item ${selectedObject === obj.id ? 'selected' : ''}`}
              onClick={() => dispatch(selectObject(obj.id))}
            >
              <span className="object-name">{obj.name}</span>
              <button
                className="delete-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch(removeObject(obj.id));
                }}
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ObjectsList;