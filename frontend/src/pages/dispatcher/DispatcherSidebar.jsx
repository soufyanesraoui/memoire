import './DispatcherSidebar.css'
import React, { useState } from 'react'
import { AiFillHome } from 'react-icons/ai'
import { GiTimeBomb } from 'react-icons/gi'
import { BiTrain } from 'react-icons/bi'
import { MdAltRoute } from 'react-icons/md'

import { FaTh, FaBars, FaMapMarkedAlt, FaRocketchat } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  const menuItem = [
    {
      path: '/',
      name: 'Home',
      icon: <AiFillHome />
    },
    {
      path: '/dispatcher',
      name: 'Dashboard',
      icon: <FaTh />
    },
    {
      path: '/dispatcher/SimulationDispatcher',
      name: 'Simulation',
      icon: <BiTrain />
    },
    {
      path: '/dispatcher/TimeDispatcher',
      name: 'Time',
      icon: <GiTimeBomb />
    },
    {
      path: '/dispatcher/MapDispatcher',
      name: 'Map',
      icon: <FaMapMarkedAlt />
    },

    {
      path: '/dispatcher/ChatDispatcher',
      name: 'Chat',
      icon: <FaRocketchat />
    },
    {
      path: '/dispatcher/RoutingDispatcher',
      name: 'Routing',
      icon: <MdAltRoute />
    },
    {
      path: '/dispatcher/AlertDispatcher',
      name: 'Alert',
      icon: <FaMapMarkedAlt />
    }
  ]
  return (
    <div className='container'>
      <div style={{ width: isOpen ? '200px' : '50px' }} className='sidebar'>
        <div className='top_section'>
          <h1 style={{ display: isOpen ? 'block' : 'none' }} className='logo'>
            Dispatcher
          </h1>
          <div style={{ marginLeft: isOpen ? '50px' : '0px' }} className='bars'>
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className='link'
            activeclassName='active'
          >
            <div className='icon'>{item.icon}</div>
            <div
              style={{ display: isOpen ? 'block' : 'none' }}
              className='link_text'
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  )
}

export default Sidebar
