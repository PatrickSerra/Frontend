import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import First from './components/base/First'

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <First></First>
    <First></First>
    <First></First>
    {/* <App /> */}
  </StrictMode>
);
