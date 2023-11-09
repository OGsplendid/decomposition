// правая часть верхнего блока

import './TopModuleRight.css'

type TAsideProps = {
    img: string,
    title: string,
    text: string,
}

export const TopModuleRight = ({ img, title, text }: TAsideProps) => {
  return (
        <div className='top-right-container'>
            <div>{img}</div>
            <div>{title}</div>
            <div>{text}</div>
        </div>
  )
}
