import React, { useRef, useState } from 'react';
import './Navbar.scss';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Navbar = () => {

    const [scrolled, setScrolled] = useState(false)

    window.onscroll = () => {
        setScrolled(window.pageYOffset === 0 ? false : true)

        return () => (window.onscroll = null);
    }

    const [searchState, setSearchState] = useState(false);
    const searchRef = useRef();

    const searchClickHandler = () => {
        if (searchState === false) {
            setSearchState(true);
            searchRef.current.style.display = "block";
        }
        else {
            setSearchState(false);
            searchRef.current.style.display = "none";
        }
    }

    return (
        <div className={scrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/330px-Netflix_2015_logo.svg.png" alt="" />

                    <span>Home</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>New</span>
                    <span>Popular</span>
                </div>

                <div className="right">
                    <form className='search' ref={searchRef}>
                        <input type="text" placeholder='Search'/>
                    </form>
                    <SearchIcon className='icon' onClick={searchClickHandler}/>

                    <span>a__fgDxcHuv</span>
                    <NotificationsIcon className='icon' />
                    <img src="https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg" alt="" />

                    <div className="profile">
                        <ArrowDropDownIcon className='icon' />
                        <div className="options">
                            <span>Settings</span>
                            <span>Logout</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Navbar;