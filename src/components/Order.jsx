import React, { useState } from 'react';
import './Order.css';

const Order = () => {
  // State for pizza size
  const [size, setSize] = useState('medium');
  // State for dough thickness
  const [dough, setDough] = useState('orta');
  // State for quantity
  const [quantity, setQuantity] = useState(1);
  // State for selected toppings
  const [selectedToppings, setSelectedToppings] = useState([]);
  
  // Price constants
  const basePrice = 85.50;
  const toppingPrice = 5.00;

  // Handle size selection
  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  // Handle dough selection
  const handleDoughChange = (e) => {
    setDough(e.target.value);
  };

  // Handle topping selection
  const handleToppingChange = (toppingId) => {
    if (selectedToppings.includes(toppingId)) {
      setSelectedToppings(selectedToppings.filter(id => id !== toppingId));
    } else {
      if (selectedToppings.length < 10) {
        setSelectedToppings([...selectedToppings, toppingId]);
      }
    }
  };

  // Increase quantity
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  // Decrease quantity
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Calculate toppings total
  const calculateSelections = () => {
    return selectedToppings.length * toppingPrice;
  };

  // Calculate total price
  const calculateTotal = () => {
    return (basePrice * quantity) + calculateSelections();
  };

  // Handle order submission
  const handleOrderSubmit = () => {
    alert(`Siparişiniz alındı!\nToplam Tutar: ${calculateTotal().toFixed(2)}₺`);
  };

  // Toppings data
  const toppings = [
    { id: 'pepperoni', name: 'Pepperoni' },
    { id: 'sosis', name: 'Sosis' },
    { id: 'kanada', name: 'Kanada Jambonu' },
    { id: 'tavuk', name: 'Tavuk Izgara' },
    { id: 'sogan', name: 'Soğan' },
    { id: 'domates', name: 'Domates' },
    { id: 'mısır', name: 'Mısır' },
    { id: 'sucuk', name: 'Sucuk' },
    { id: 'jalepeno', name: 'Jalepeno' },
    { id: 'sarımsak', name: 'Sarımsak' },
    { id: 'biber', name: 'Biber' },
    { id: 'ananas', name: 'Ananas' },
    { id: 'kabak', name: 'Kabak' }
  ];

  return (
    <div className="order">
      <div className="radio-container">
        <div className="choose-size">
          <h2 className='boyut'>Boyut Seç*</h2>
          <label className="radio-option">
            <input 
              type="radio" 
              name="size" 
              value="small" 
              checked={size === 'small'}
              onChange={handleSizeChange}
            />
            <span className="radio-custom"></span>
            Küçük
          </label>

          <label className="radio-option">
            <input 
              type="radio" 
              name="size" 
              value="medium" 
              checked={size === 'medium'}
              onChange={handleSizeChange}
            />
            <span className="radio-custom"></span>
            Orta
          </label>

          <label className="radio-option">
            <input 
              type="radio" 
              name="size" 
              value="large" 
              checked={size === 'large'}
              onChange={handleSizeChange}
            />
            <span className="radio-custom"></span>
            Büyük
          </label>
        </div>
        <div className="hamur-container">
          <div>
            <h2 className="hamur">Hamur Seç*</h2>
            <select 
              className="hamur-select" 
              id="hamur-select"
              value={dough}
              onChange={handleDoughChange}
            >
              <option value="ince">İnce</option>
              <option value="orta">Orta</option>
              <option value="kalin">Kalın</option>
            </select>
          </div>
        </div>
      </div>
      
      <div className='ek'>
        <h3 className='ek'>Ekstra Malzemeler</h3>
        <p className='ekstra'>En fazla 10 malzeme seçebilirsiniz. 5TL</p>
        <div className="checkbox-container">
          <div className="checkbox1">
            {toppings.slice(0, 5).map(topping => (
              <div key={topping.id}>
                <input 
                  type='checkbox' 
                  id={topping.id}
                  checked={selectedToppings.includes(topping.id)}
                  onChange={() => handleToppingChange(topping.id)}
                  disabled={selectedToppings.length >= 10 && !selectedToppings.includes(topping.id)}
                />
                <label htmlFor={topping.id}>{topping.name}</label>
              </div>
            ))}
          </div>
          <div className="checkbox2">
            {toppings.slice(5, 10).map(topping => (
              <div key={topping.id}>
                <input 
                  type='checkbox' 
                  id={topping.id}
                  checked={selectedToppings.includes(topping.id)}
                  onChange={() => handleToppingChange(topping.id)}
                  disabled={selectedToppings.length >= 10 && !selectedToppings.includes(topping.id)}
                />
                <label htmlFor={topping.id}>{topping.name}</label>
              </div>
            ))}
          </div>
          <div className="checkbox3">
            {toppings.slice(10).map(topping => (
              <div key={topping.id}>
                <input 
                  type='checkbox' 
                  id={topping.id}
                  checked={selectedToppings.includes(topping.id)}
                  onChange={() => handleToppingChange(topping.id)}
                  disabled={selectedToppings.length >= 10 && !selectedToppings.includes(topping.id)}
                />
                <label htmlFor={topping.id}>{topping.name}</label>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="siparis">
        <div className='buttons'>
          <button className='eksi' onClick={decreaseQuantity}>-</button>
          <button>{quantity}</button>
          <button className='arti' onClick={increaseQuantity}>+</button>
        </div>
        <div className='button-hesap'>
          <div className='price-row'>
            <span className='price-label'>Seçimler</span>
            <span className='price-value'>{calculateSelections().toFixed(2)}₺</span>
          </div>
          <div className='price-row'>
            <span className='price-label'>Toplam</span>
            <span className='price-value-total'>{calculateTotal().toFixed(2)}₺</span>
          </div>
          <button className='order-button' onClick={handleOrderSubmit}>
            SİPARİŞ VER
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;