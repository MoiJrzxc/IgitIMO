import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import AppNavbar from '../components/Navbar';
import Footer from '../components/Footer';
import products from '../data/products';
import ProductCard from '../components/ProductCard';
import BackButton from '../components/BackButton';
import '../styles/style.css';

export default function ProductList() {
  const navigate = useNavigate();
  const list = products; // switch to sampleProducts for testing

  return (
    <div className="page">
      <AppNavbar />

      <main className="container main">
        <div className="main-header d-flex align-items-center mb-4">
          <BackButton to="/" label="Home" />
        </div>

        <div className="product-grid">
          {list.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
