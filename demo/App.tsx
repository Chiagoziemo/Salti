import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Product from './pages/Product';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="product" element={<Product />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
