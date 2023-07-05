import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
// import App from './App';
import Dashboard from './pages/dashboard';
import { FormProvider } from './components/postcontext/Formcontext/Form';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FormProvider>
  <React.StrictMode>
    <Dashboard/>
  </React.StrictMode>
  </FormProvider>
);

reportWebVitals();
