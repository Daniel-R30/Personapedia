import React from 'react'

const Tab = ({ text, active }) => {
  return (
    <div className={ `tab ${ active ? 'tab--active' : '' }` } >{ text }</div>
  )
}

export default Tab