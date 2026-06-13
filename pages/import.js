import { useState } from "react";

export default function ImportPage() {
  const [url, setUrl] = useState("");

  async function importProduct() {
    const res = await fetch("/api/importProduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ url })
    });

    const data = await res.json();
    alert(data.message);
  }

  return (
    <div>
      <h1>Import Product</h1>
      <input
        type="text"
        placeholder="Paste AliExpress URL"
        onChange={(e) => setUrl(e.target.value)}
      />
      <button onClick={importProduct}>Import</button>
    </div>
  );
}
