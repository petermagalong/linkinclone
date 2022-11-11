import React from 'react'
import './Header.css';

import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import ChatIcon from '@mui/icons-material/Chat';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import NotificationsIcon from '@mui/icons-material/Notifications';

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
            <HeaderOption Icon={HomeIcon} title="Home"/>
            <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
            <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
            <HeaderOption Icon={ChatIcon} title="Messaging"/>
            <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
            <HeaderOption avatar='https://scontent.fmnl3-1.fna.fbcdn.net/v/t1.6435-9/180122233_2965694133711868_1575737409090990536_n.jpg?stp=dst-jpg_s1080x2048&_nc_cat=110&ccb=1-7&_nc_sid=a4a2d7&_nc_eui2=AeF6aRGdbAVJbxxnSo5UGpL1YYUw0uuzV7phhTDS67NXuiwEjmgmQoJdZXyNJmLm_pC1XfhpKolU71Ki9KPRxsNZ&_nc_ohc=qe3gduLZRd8AX-BliwE&_nc_ht=scontent.fmnl3-1.fna&oh=00_AfCj5D_eX3-lH0g_r6Urz-fLyp0Fd8apOJwoel3lWhuz5A&oe=6391042B' title='me'/>

        </div>
    </div>
  )
}

export default Header