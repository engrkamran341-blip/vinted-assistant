import { useEffect, useState } from "react";
import supabase from "../lib/supabase";

export default function Dashboard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const { data } = await supabase
        .from("products")
        .select("*");

      setProducts(data);
    }

    loadProducts();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>

      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <p>Profit: €{product.profit}</p>
        </div>
      ))}
    </div>
  );
}
