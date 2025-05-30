import Navbar from '@/components/Navbar'
import React, { FC } from 'react'

const FrontLayout:FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  )
}

export default FrontLayout
