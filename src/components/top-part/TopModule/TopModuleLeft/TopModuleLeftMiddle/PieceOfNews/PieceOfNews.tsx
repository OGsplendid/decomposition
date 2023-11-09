import { TNews } from "../TopModuleLeftMiddle"
import './PieceOfNews.css'

type TPiece = {
    piece: TNews,
}

export const PieceOfNews = ({ piece }: TPiece) => {
  return (
    <p className='piece-of-news'>{piece}</p>
  )
}
