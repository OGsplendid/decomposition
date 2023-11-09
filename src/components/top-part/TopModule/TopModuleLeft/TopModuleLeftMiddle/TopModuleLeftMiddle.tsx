// новости

import { PieceOfNews } from './PieceOfNews/PieceOfNews';
import './TopModuleLeftMiddle.css'

export type TNews = string;

interface INewsProps {
    news: TNews[],
}

export const TopModuleLeftMiddle = ({ news }: INewsProps) => {
  return (
    <div className='news'>
        {news.map((p) => (
          <PieceOfNews piece={p} />
        ))}
    </div>
  )
}
