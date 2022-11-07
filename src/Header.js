import React from 'react'
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';

function Header() {
  return (
    <div className='header'>

        <div className="header__left">
            <img 
              src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" 
              alt="linkin" 
            />

            <div className="header__search">
                {/* Search icon */}
                <SearchIcon />
                <input type="text" name="" id="" />
            </div>
        </div>

        <div className="header__right">
            <HeaderOption />
        </div>
    </div>
  )
}

export default Header