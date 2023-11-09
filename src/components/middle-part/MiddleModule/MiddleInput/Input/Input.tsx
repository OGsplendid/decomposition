// инпут и текст под ним

import './Input.css'

type TTip = string;
type TLink = string;

type TtipProps = {
  tip: TTip,
  link: TLink,
}

export const Input = ({ tip, link }: TtipProps) => {
  return (
    <div className='input-container'>
      <input className='input' />
      <p className='tip'>{`${tip} ${link}`}</p>
    </div>
  )
}
