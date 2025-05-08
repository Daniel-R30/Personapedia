import React from 'react'
import Tab from './Tab'
import '../../styles/tabBar.css'

const TabBar = () => {
  return (
    <div className='tabBar'>
        <Tab text='Social Links' active />
        <Tab text='Fusion Calculator' />
    </div>
  )
}

export default TabBar