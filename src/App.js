import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from "./components/sidebar";
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Customers from './pages/Customers';
import page404 from './images/404 page.png'
import Overview from './components/overview-products-table';
import CreateProducts from './components/create-products';
import Productdetails from './components/productdetails';
import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Navigate to='admin/dashboard' replace />} />
          <Route path="admin/dashboard" element={<Dashboard />} />
          <Route path="admin/products" element={<Navigate to='overview' replace />} />
          <Route path="admin/products" element={<Products />}>
            {/* <Route index element={<Overview />} /> */}
            <Route path='overview' element={<Overview />} />
            <Route path='createnew' element={<CreateProducts />} />
            <Route path=':productId' element={<Productdetails />}/>
          </Route>
          <Route path="admin/customers" element={<Customers />} />
          <Route path='*' element={<img style={{ width: '87%' }} src={page404} alt=''/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
