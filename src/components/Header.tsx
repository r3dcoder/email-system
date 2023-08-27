import React from 'react';
import 'material-icons/iconfont/material-icons.css';

const Header: React.FC = () => {
  return (
    <div className="header bg-white border-b border-gray-300 p-4 flex items-center justify-between shadow-sm">
      <div className="header__left flex items-center space-x-2">
        <span className="material-icons">menu</span>
        <img
          src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png"
          alt=""
          className="object-contain h-20 ml-1"
        />
      </div>
      <div className="header__middle flex items-center space-x-2 bg-whitesmoke p-2 rounded">
        <span className="material-icons text-gray-500">search</span>
        <input
          type="text"
          placeholder="Search mail"
          className="border rounded p-1 flex-grow outline-none bg-transparent"
        />
        <span className="material-icons text-gray-500">arrow_drop_down</span>
      </div>
      <div className="header__right flex items-center space-x-2">
        <span className="material-icons text-gray-500">apps</span>
        <span className="material-icons text-gray-500">notifications</span>
        <span className="material-icons text-gray-500">account_circle</span>
      </div>
    </div>
  );
};

export default Header;
