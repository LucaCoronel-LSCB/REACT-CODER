import React, { useEffect, useState } from 'react';
import "./ProductList.css"

export const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [productsPerPage, setProductsPerPage] = useState(6); // Aunque no estás usando este estado, lo dejamos aquí para tu posible uso futuro
  const [currentPage, setCurrentPage] = useState(1); // Igual que arriba

  const prodctList = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const products = await response.json();
      setProducts(products);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    prodctList();
  }, []);

  return (
    <div className="container-products">
   

      {products.map((product) => (
        <div key={product.id} className="card-product">
          <figure className="container-img">
            <img src={product.image} alt={product.title} />
          </figure>
          <div className="info-product">
            <h3>{product.title}</h3>
            <p className="price">$ {product.price}</p>
            <button>Añadir al carrito</button>
          </div>
        </div>
      ))}
    </div>
  );
};
