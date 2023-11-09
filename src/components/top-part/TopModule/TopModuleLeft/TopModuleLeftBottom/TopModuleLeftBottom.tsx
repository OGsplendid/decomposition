// курсы валют

import './TopModuleLeftBottom.css'

interface IItem {
  name: string,
  value: string,
  change: string,
}

type TItemsProps = {
    items: IItem[],
}

export const TopModuleLeftBottom = ({ items }: TItemsProps) => {
  return (
    <div className='items'>
      {items.map(i => (
        <>
          <p className='item-name'>{i.name}</p><p className='item-value'>{i.value}</p><p className='item-change'>{i.change}</p>
        </>
      ))}
    </div>
  )
}
