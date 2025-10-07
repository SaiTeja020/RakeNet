import './index.css'; //before react imports
import 'leaflet/dist/leaflet.css';
import './dist/tailwind.css';
import { StrictMode } from 'react';
// For React 18, `createRoot` is imported from `react-dom/client`.
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from './context/ThemeContext';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
