// левая часть верхнего модуля от "сейчас в СМИ" до курсов валют

import { PropsWithChildren } from 'react'
import './TopModuleLeft.css'

export const TopModuleLeft = ({ children }: PropsWithChildren) => {
  return (
    <div className='top-left-container'>{children}</div>
  )
}
