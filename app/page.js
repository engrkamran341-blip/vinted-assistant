"use client";

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const { data, error } = await supabase
        .from("products")
        .select("*");

      if (error) {
        console.log(error);
      } else {
        setProducts(data);
      }
    }

    loadProducts();
  }, []);

  return (
    <div>
      <h1>Vinted Products</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>Buy Price: €{product.buy_price}</p>
          <a href={product.supplier_link} target="_blank">
            Buy Here
          </a>
        </div>
      ))}
    </div>
  );
}
