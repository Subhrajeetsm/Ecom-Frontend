import { useState, useEffect } from 'react';
import Card from './Card';

function Products({ Searchquery }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch(
        'http://localhost:3000/products'
      );
      const data = await response.json();
      setProducts(data);
    }

    fetchProducts();
  }, []);

  const filterPr = products.filter((p) =>
    p.title.toLowerCase().includes(Searchquery.toLowerCase())
  );

  return (
    <>
    <div style={

      {
     display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
    padding: "20px",

      }
    }>
      {filterPr.map((e) => (
        <Card
          id={e.id}
          img={e.img}
          title={e.title}
          price={e.price}
        />
      ))}
      </div>
    </>
  );
}

export default Products;