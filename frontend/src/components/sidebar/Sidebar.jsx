import React from 'react'
import SearchBar from './SearchBar'
import Conversations from './Conversations'
import Logout from './Logout'

function Sidebar() {
  return (
    <div className='border-r border-slate-900 p-4 flex flex-col'>
        <SearchBar />
        <div className='divider px-3'></div>
        <Conversations />
        <Logout/>
    </div>
  )
}

export default Sidebar