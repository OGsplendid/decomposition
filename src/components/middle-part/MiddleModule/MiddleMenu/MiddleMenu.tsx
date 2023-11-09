// собственно, меню

import './MiddleMenu.css'

type IMenuItem = string;

type TMenuItemsProps = {
    menuItems: IMenuItem[],
}

export const MiddleMenu = ({ menuItems }: TMenuItemsProps) => {
  return (
    <div className='menu-items'>
        {menuItems.map(i => (
            <p className='menu-item'>{i}</p>
        ))}
    </div>
  )
}
