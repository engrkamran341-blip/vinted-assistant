import { supabase } from "../lib/supabase";

export default async function Home() {
  const { data: products } = await supabase
    .from("products")
    .select("*");

  return (
    <div>
      <h1>Vinted Products</h1>

      {products?.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>Buy: €{product.buy_price}</p>
          <p>Sell: €{product.sell_price}</p>
          <p>Profit: €{product.profit}</p>
          <a href={product.supplier_link}>Supplier Link</a>
        </div>
      ))}
    </div>
  );
}
