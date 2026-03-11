import React from 'react';
import CartDetails from './CartDetails';
import './CartDetails.css'

const fruits=[
    {id:1, name:'Apple', price: '250Rs/kg', img:'/apple.jpg'},
    {id:2, name:'Banana', price: '50Rs/kg', img:'/banana.jpg'},
    {id:3, name:'Custardapple', price: '200Rs/kg', img:'/custurdapple.jpg'},
    {id:4, name:'Fruitbasket', price: '1000Rs/kg', img:'/fruitbasket.jpg'},
    {id:5, name:'Guava', price: '150Rs/kg', img:'/guava.jpg'},
    {id:6, name:'JackFruit', price: '100Rs/kg', img:'/jackfruit.jpg'},
    {id:7, name:'Mango', price: '220Rs/kg', img:'/mango.jpg'},
    {id:8, name:'Orange', price: '150Rs/kg', img:'/orange.jpg'},
    {id:5, name:'Papaya', price: '200Rs/kg', img:'/papaya.jpg'},
    {id:5, name:'Pineapple', price: '100Rs/kg', img:'/pineapple.jpg'}
];



function FruitStore() {
   const [cart, setCart] = React.useState([]);
   const addToCart = (fruit) => {
    const existingFruit = cart.find((item) => item.id === fruit.id);
    if (existingFruit) {
      setCart(cart.map((item) => item.id === fruit.id ? { ...item, quantity: item.quantity + 1 } : item));
    } else {
      setCart([...cart, { ...fruit, quantity: 1 }]);
    }
  };
  return (
    <div className="container">
      <h1>Fresh Fruits Store</h1>
      <div className="grid">
        {fruits.map((fruit) => (
          <div key={fruit.id} className="card">
            <img src={fruit.img} alt={fruit.name}/>
            <span className="alt-text">{fruit.name} (Image not available)</span>
            <div className="card-content">
              <p>{fruit.name}</p>
              <p>{fruit.price}</p>
              <button onClick={() => addToCart(fruit)}>Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <CartDetails cart={cart} setCart={setCart} />

    </div>
    );
}
export default FruitStore;