import React from 'react'
import './Sidebar.css';
import AccFeed from './AccFeed'
import SidebarButtom from './SidebarButtom'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <AccFeed />
      <SidebarButtom />
    </div>
  )
}
