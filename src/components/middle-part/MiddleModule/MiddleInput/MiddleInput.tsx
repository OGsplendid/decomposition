// контейнер для средней части

import { PropsWithChildren } from 'react'
import './MiddleInput.css'

export const MiddleInput = ({ children }: PropsWithChildren) => {
  return (
    <div className='middle-input'>
        {children}
    </div>
  )
}
