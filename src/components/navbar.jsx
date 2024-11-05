import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between items-center">
        <div className="">
          <h1>NAMA BRAND</h1>
        </div>
        <div className="">
          <a href="">Home</a>
          <a href="">Tentang</a>
          <a href="">Layanan</a>
        </div>  
      </nav>    
    </div>
  );
};

export default Navbar;
