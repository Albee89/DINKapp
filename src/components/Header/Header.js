import React from 'react';
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/icons/Forum';



const Header = () => {
    return(
        <div className='header'>
        <IconButton>
<PersonIcon />

<ForumIcon  className="header_icon" fontSize= "large" />
</IconButton>
<img className='header_logo' src='Moredrobe.png' alt="logohere"/>
</div>


    );

}
export default Header;