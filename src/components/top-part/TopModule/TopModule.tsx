// вся верхняя часть, до меню "новости, картинки, карты...", не включая его. Делит на две части флексом

import { PropsWithChildren } from "react"
import './TopModule.css'

export const TopModule = ({ children }: PropsWithChildren) => {
  return (
    <div className="top-container">{children}</div>
  )
}
