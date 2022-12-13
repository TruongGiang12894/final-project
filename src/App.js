import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Sidebar from "./components/sidebar";
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Customers from './pages/Customers';
import page404 from './images/404 page.png'
import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Navigate to ='dashboard' replace/>} /> 
          <Route index path="dashboard"  element={<Dashboard/>} />
          <Route path="products" element={<Products />} />
          <Route path="customers" element={<Customers />} />
          <Route path='*' element={<img style={{width: '87%'}} src={page404} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
