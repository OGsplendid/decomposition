// от "сейчас в СМИ" до даты

import './TopModuleLeftTop.css'

type TTopModuleLeftTopProps = {
  country: string,
  time: string
}

export const TopModuleLeftTop = ({ country, time }: TTopModuleLeftTopProps) => {
  return (
    <div className='top-left-top-container'>
      <p className='now-in-news'>Сейчас в СМИ</p>
      <p className='country'>{country}</p>
      <p className='recommendations'>Рекомендуем</p>
      <div className='time'>{time}</div>
    </div>
  )
}
