// каждая отдельная карточка

import { TDesctiption } from '../BottomModule';
import './CardHolder.css'

interface IDescProps {
    arr: TDesctiption[],
}

export const CardHolder = ({ arr }: IDescProps) => {
    return (
        <div className='desc-wrapper'>
            {arr.map(d => (
                <p>{d}</p>
            ))}
        </div>
    )
}