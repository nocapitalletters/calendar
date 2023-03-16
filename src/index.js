import React from 'react';
import ReactDOM from 'react-dom/client';
import './shared/style/global.css'
import './shared/style/typography.css'
import App from './App';
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from 'jotai'

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
