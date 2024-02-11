
import React from 'react'
import '../style/global.css'
const PageContainer = ({children}) => {
  return (
    <div className='px-6 lg:px-[210px] flex items-center justify-center'>
      <div className='max-w-[975px] w-full'>
        {children}
      </div>
    </div>
  )
}

export default PageContainer