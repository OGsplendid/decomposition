// центральная часть от меню до рекламы

import { PropsWithChildren } from 'react'
import './MiddleModule.css'

export const MiddleModule = ({ children }: PropsWithChildren) => {
  return (
    <div className='middle-container'>{children}</div>
  )
}
