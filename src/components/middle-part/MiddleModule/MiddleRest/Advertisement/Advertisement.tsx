// реклама

import './Advertisement.css'

type TText = {
    text: string,
}

export const Advertisement = ({ text }: TText) => {
  return (
    <div className='advertisement'>{text}</div>
  )
}
