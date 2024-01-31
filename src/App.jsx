
import './App.css';
import { DataGrid } from '@mui/x-data-grid';
import Datagrid from './Component/Datagrid';
import Header from './Component/Header';
import Footer from './Component/Footer';
import HomePage from "./Component/HomePage";
import React from 'react';
import Buttons from './Component/Buttons';

function App() {
  return (
    <div className="App">
       <Header />
      <HomePage />      
      <Footer />
    </div>
  );
}

export default App;
