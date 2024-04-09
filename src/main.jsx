import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { AppProvider } from './context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

//API APPLICATION ID -> 587247
//API ACCESS KEY -> KW8cAG7SNjOZh8a6JH8zb_4ccJBFZ5w_PJ22qBFBTDY
//API SECRET KEY -> oBGnXVKypJftHKcvQnX53GI7AATyLVTx3o3P0rf5JuI

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppProvider>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  </AppProvider>
);
