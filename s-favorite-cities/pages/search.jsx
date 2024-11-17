import { useState } from "react";

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Căuta orașe</h1>
      <p>În această pagină vei putea căuta orașe din întreaga lume.</p>

      <input
        type="text"
        placeholder="Căuta oraș..."
        value={searchQuery}
        onChange={handleInputChange}
        style={{
          width: "100%",
          padding: "10px",
          fontSize: "16px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          marginTop: "20px",
        }}
      />
    </div>
  );
}
