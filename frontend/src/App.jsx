import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from 'react-hot-toast';

import MainLayout from './layouts/MainLayout';
import Dashboard from './pages/Dashboard';
import Income from './pages/Income';
import Expense from './pages/Expense';
import Budget from './pages/Budget';
// import Analytics from './pages/Analytics';
import Settings from './pages/Settings';
import { FinanceProvider } from './context/FinanceContext';
import { ModalProvider } from './context/ModalContext';

function App() {
  return (
    <BrowserRouter>
    <ModalProvider>
    <FinanceProvider>
      <Toaster
        position="bottom-right"
        reverseOrder={false}
        containerStyle={{ zIndex: 99999 }} 
      />
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='income' element={<Income />} />
          <Route path='expense' element={<Expense />} />
          <Route path='budget' element={<Budget />} />
          {/* <Route path='analytics' element={<Analytics />} /> */}
          <Route path='settings' element={<Settings />} />
        </Route>
      </Routes>
      </FinanceProvider>
      </ModalProvider>
    </BrowserRouter>
  )
}

export default App