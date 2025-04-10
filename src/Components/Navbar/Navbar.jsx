import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <button className='button'><img src = "https://seeklogo.com/images/B/blinkit-logo-568D32C8EC-seeklogo.com.png" className = "img-logo" />Blinkit</button>
      <button className='button'><img src = "https://tse4.mm.bing.net/th?id=OIP.lIu5z_1cpQvaLxW6kfDCCQHaE8&pid=Api&P=0&h=180" className = "img-logo" />Zepto</button>
      <button className='button'><img src = "https://www.themobileindian.com/wp-content/uploads/2021/06/swiggy-logo-300x169.jpg" className = "img-logo"/>Instamart</button>
    </div>
  )
}

export default Navbar;
