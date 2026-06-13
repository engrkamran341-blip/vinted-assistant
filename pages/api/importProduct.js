import supabase from "../../lib/supabase";

export default async function handler(req, res) {
  const { url } = req.body;

  const fakeProduct = {
    title: "Sample Product",
    supplier_link: url,
    buy_price: 10,
    sell_price: 20,
    shipping: 5,
    profit: 5
  };

  await supabase.from("products").insert([fakeProduct]);

  res.json({
    success: true,
    message: "Product imported"
  });
}
