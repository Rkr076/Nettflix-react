import './navbar.scss';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    
    const changeBackground = () =>{
       if(window.scrollY >= 90)
       {
         setIsScrolled(true);
       }else{
        setIsScrolled(false);
       }
    }

    window.addEventListener('scroll', changeBackground);
    return (
        <div className={isScrolled ? 'navbar scrolled':'navbar'}>
            <div className="container">
                <div className="left">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                        alt=""
                    />
                    <span>Homepage</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>New and Popular</span>
                    <span>My List</span>
                </div>
                <div className="right">
                    <SearchIcon className='icons' />
                    <span>KID</span>
                    <NotificationsIcon className='icons' />
                    <img 
                    src="https://images.pexels.com/photos/6982557/pexels-photo-6982557.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt=""
                    />
                    <div className='profile'>
                        <ArrowDropDownIcon className='icons' />
                        <div className='options'>
                            <span>Settings</span>
                            <span>Logout</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Navbar