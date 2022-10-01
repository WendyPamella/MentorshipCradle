import React from 'react'
import Sidebar from '../Sidebar'
import './menteedashb.css';
import Items from "../Items.js"
import Profile from '../Profile.js'

function MenteeDashboard() {
  return (
    <div className='dashboard'>
        <Items/>
        <Profile/>
    </div>
  )
}

export default MenteeDashboard