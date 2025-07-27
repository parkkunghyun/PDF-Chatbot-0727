// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import UploadPage from './pages/UploadPage';
import ChatPage from './pages/ChatPage';
import MyDocumentsPage from './pages/MyDocumentsPage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UploadPage />} />
        <Route path="/chat/:docId" element={<ChatPage />} />
        <Route path="/my" element={<MyDocumentsPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
