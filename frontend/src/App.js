import React from 'react';
import { Provider } from 'react-redux';
import store from './stores/store';
import MainLayout from './components/Layout/MainLayout';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <MainLayout />
    </Provider>
  );
}

export default App;