import React from 'react'
import Conversation from './Conversation'

function Conversations() {
  return (
    <div className='flex-1 overflow-auto '>
        <Conversation/>
        <Conversation/>
        <Conversation/>
        <Conversation/>
       
    </div>
  )
}

export default Conversations