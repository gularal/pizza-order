import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "./components/Footer";
import Header from "./components/Header";
import './styles.css';
const OrderPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    size: "",
    toppings: [],
    note: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  
  useEffect(() => {
    const savedOrder = JSON.parse(localStorage.getItem("lastOrder"));
    if (savedOrder) {
      setFormData(savedOrder);
      setMessage("Önceki siparişiniz yüklendi.");
    }
  }, []);

  
  const handleToppingChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      toppings: checked
        ? [...prev.toppings, value]
        : prev.toppings.filter((topping) => topping !== value),
    }));
  };

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    axios.post("https://reqres.in/api/pizza", formData)
      .then((res) => {
        setMessage("Sipariş başarıyla gönderildi!");
        localStorage.setItem("lastOrder", JSON.stringify(formData)); // Kaydet
      })
      .catch((err) => {
        setMessage("Sipariş sırasında hata oluştu.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (

    <div>
      <Header />
      <h1>Pizza Siparişi</h1>
      
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          İsim: 
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>

        <label>
          Boyut Seçimi:
          <select name="size" value={formData.size} onChange={handleChange} required>
            <option value="">Seçiniz</option>
            <option value="small">Küçük</option>
            <option value="medium">Orta</option>
            <option value="large">Büyük</option>
          </select>
        </label>

        <fieldset>
          <legend>Ekstra Malzemeler:</legend>
          <label>
            <input type="checkbox" value="Peynir" onChange={handleToppingChange} 
              checked={formData.toppings.includes("Peynir")} /> Peynir
          </label>
          <label>
            <input type="checkbox" value="Sucuk" onChange={handleToppingChange} 
              checked={formData.toppings.includes("Sucuk")} /> Sucuk
          </label>
          <label>
            <input type="checkbox" value="Mantar" onChange={handleToppingChange} 
              checked={formData.toppings.includes("Mantar")} /> Mantar
          </label>
        </fieldset>

        <label>
          Notlar:
          <textarea name="note" value={formData.note} onChange={handleChange}></textarea>
        </label>

        <button type="submit" disabled={loading}>
          {loading ? "Gönderiliyor..." : "Siparişi Gönder"}
        </button>
      </form>
      <Footer />
    </div>
  );
};

export default OrderPage;
