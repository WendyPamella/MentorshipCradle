import React from 'react';
import { Link } from 'react-router-dom';
import "./items.css";
import { MdDashboard, MdMenuBook, MdPerson} from "react-icons/md";

function Items() {
  return (
    <div className="itemsContainer">
        <div className="itemsWrapper">
          <ul className="sidebarList">
          <li className="sidebarListItem">
            <MdDashboard className="sidebarIcon"/>
            <Link to='/profile' className='links'>Dashboard</Link>
          </li>
          <li className="sidebarListItem">
            <MdPerson className="sidebarIcon"/>
            <Link className='links'>My Profile</Link>
          </li>
          <li className="sidebarListItem">
            <MdMenuBook className="sidebarIcon"/>
            <Link className='links'>learning</Link>
          </li>
          <li className="sidebarListItem">
            <MdMenuBook className="sidebarIcon"/>
            <Link className='links'>My Story</Link>
          </li>
                   
        </ul> 
        </div>
      
    </div>
  )
}

export default Items
