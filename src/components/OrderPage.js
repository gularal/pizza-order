import React, { useState } from "react";

const OrderPage = () => {
  const [size, setSize] = useState("Orta");
  const [dough, setDough] = useState("");
  const [extras, setExtras] = useState([]);
  const [note, setNote] = useState("");
  const [quantity, setQuantity] = useState(1);

  const basePrice = 85.5;
  const extraPrice = 5;
  const totalPrice = basePrice + extras.length * extraPrice * quantity;

  const handleExtrasChange = (event) => {
    const value = event.target.value;
    if (event.target.checked) {
      setExtras([...extras, value]);
    } else {
      setExtras(extras.filter((extra) => extra !== value));
    }
  };

  return (
    <div className="container mx-auto px-4 py-6 bg-white rounded shadow">
      <h1 className="text-red-600 text-3xl font-bold mb-4">Teknolojik Yemekler</h1>
      <div className="border-b pb-4 mb-4">
        <h2 className="text-2xl font-semibold">Position Absolute Acı Pizza</h2>
        <p className="text-gray-600">Fiyat: {basePrice.toFixed(2)}₺</p>
        <p className="text-sm text-gray-500">4.9 ⭐ (2000 Değerlendirme)</p>
      </div>

      {/* Boyut Seçimi */}
      <div className="mb-4">
        <h3 className="font-bold mb-2">Boyut Seç</h3>
        <div className="flex gap-4">
          {["Küçük", "Orta", "Büyük"].map((sizeOption) => (
            <label key={sizeOption} className="flex items-center gap-2">
              <input
                type="radio"
                name="size"
                value={sizeOption}
                checked={size === sizeOption}
                onChange={() => setSize(sizeOption)}
              />
              {sizeOption}
            </label>
          ))}
        </div>
      </div>

      {/* Hamur Seçimi */}
      <div className="mb-4">
        <h3 className="font-bold mb-2">Hamur Seç</h3>
        <select
          className="border border-gray-300 rounded px-4 py-2"
          value={dough}
          onChange={(e) => setDough(e.target.value)}
        >
          <option value="">Hamur Kalınlığı</option>
          <option value="İnce">İnce</option>
          <option value="Kalın">Kalın</option>
        </select>
      </div>

      {/* Ek Malzemeler */}
      <div className="mb-4">
        <h3 className="font-bold mb-2">Ek Malzemeler (₺5 her biri)</h3>
        <div className="grid grid-cols-3 gap-2">
          {["Pepperoni", "Sucuk", "Sosis", "Soğan", "Domates", "Jalapeno", "Biber", "Ananas", "Kabak"].map((extra) => (
            <label key={extra} className="flex items-center gap-2">
              <input
                type="checkbox"
                value={extra}
                onChange={handleExtrasChange}
              />
              {extra}
            </label>
          ))}
        </div>
      </div>

      {/* Sipariş Notu */}
      <div className="mb-4">
        <h3 className="font-bold mb-2">Sipariş Notu</h3>
        <textarea
          className="w-full border border-gray-300 rounded px-4 py-2"
          placeholder="Siparişe eklemek istediğiniz bir not var mı?"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </div>

      {/* Sipariş Toplam */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <button
            className="border px-2"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
          >
            -
          </button>
          <span>{quantity}</span>
          <button className="border px-2" onClick={() => setQuantity(quantity + 1)}>
            +
          </button>
        </div>
        <p className="text-lg font-semibold">Toplam: {totalPrice.toFixed(2)}₺</p>
      </div>

      {/* Sipariş Ver */}
      <button className="bg-yellow-500 text-white px-6 py-2 rounded font-bold">
        SİPARİŞ VER
      </button>
    </div>
  );
};

export default OrderPage;
