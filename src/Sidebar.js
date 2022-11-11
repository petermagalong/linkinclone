import { Avatar } from '@mui/material'
import React from 'react'
import "./Sidebar.css"

function Sidebar() {
    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className='sidebar__hash'>#</span>
            <p>{topic}</p>
        </div>
    )
  return (
    <div className='sidebar'>
        <div className="sidebar__top">
            <img 
             src="//images.ctfassets.net/hrltx12pl8hq/5yeUD3rD2QqRfDL3Izw3WU/f05fc4483fdcda948a0258a7e13818db/02-abstract-backgrounds_717161425.jpg?fit=fill&w=480&h=270&fm=webp"
             alt='backgoundimage' 
            />
            <Avatar className='sidebar__avatar'/> 
            <h2>Peter Christian Magalong</h2>
            <h4>petermagalong@gmail.com</h4>
        </div>
        <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>Who viewed you</p>
                <p className='sidebar_statNumber'>
                    2,543
                </p>
            </div>
            <div className="sidebar__stat">
                <p>Who viewed you</p>
                <p className='sidebar_statNumber'>
                    2,448
                </p>
            </div>
        </div>

        <div className="sidebar__bottom">
            <p>Recent</p>
            {recentItem('reactjs')}
            {recentItem('programming')}
            {recentItem('Softwareengineering')}
            {recentItem('design')}
            {recentItem('developer')}
        </div>
    </div>
  )
}

export default Sidebar