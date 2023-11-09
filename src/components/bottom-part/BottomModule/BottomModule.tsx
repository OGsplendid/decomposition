// карточки с новостями - контейнер с ними

import './BottomModule.css'
import { CardHolder } from './CardHolder/CardHolder';

export type TDesctiption = string;

type TCard = {
    title: string,
    descriptionArr: TDesctiption[],
}

interface ICardsProps {
    cards: TCard[],
}

export const BottomModule = ({ cards }: ICardsProps) => {
    return (
        <div className='bottom-container'>
            {cards.map(card => (
                <div className='bottom-card'>
                    <h3 className='bottom-card-title'>{card.title}</h3>
                    <CardHolder arr={card.descriptionArr} />
                </div>
            ))}
        </div>
    )
}
