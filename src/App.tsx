import './App.css'
import { BottomModule } from './components/bottom-part/BottomModule/BottomModule'
import { Logo } from './components/middle-part/MiddleModule/Logo/Logo'
import { Button } from './components/middle-part/MiddleModule/MiddleInput/Button/Button'
import { Input } from './components/middle-part/MiddleModule/MiddleInput/Input/Input'
import { MiddleInput } from './components/middle-part/MiddleModule/MiddleInput/MiddleInput'
import { MiddleMenu } from './components/middle-part/MiddleModule/MiddleMenu/MiddleMenu'
import { MiddleModule } from './components/middle-part/MiddleModule/MiddleModule'
import { Advertisement } from './components/middle-part/MiddleModule/MiddleRest/Advertisement/Advertisement'
import { TopModule } from './components/top-part/TopModule/TopModule'
import { TopModuleLeft } from './components/top-part/TopModule/TopModuleLeft/TopModuleLeft'
import { TopModuleLeftBottom } from './components/top-part/TopModule/TopModuleLeft/TopModuleLeftBottom/TopModuleLeftBottom'
import { TopModuleLeftMiddle } from './components/top-part/TopModule/TopModuleLeft/TopModuleLeftMiddle/TopModuleLeftMiddle'
import { TopModuleLeftTop } from './components/top-part/TopModule/TopModuleLeft/TopModuleLeftTop/TopModuleLeftTop'
import { TopModuleRight } from './components/top-part/TopModule/TopModuleRight/TopModuleRight'

const news = [
  'Some long politically centered boring piece of news',
  'Some long politically centered boring piece of news',
  'Some long politically centered boring piece of news',
  'Some long politically centered boring piece of news',
  'Some long politically centered boring piece of news',
];

const items = [
  {
    name: 'USD',
    value: '110.48',
    change: '+2.37',
  },
  {
    name: 'EUR',
    value: '150.20',
    change: '+3.42',
  },
  {
    name: 'НЕФТЬ',
    value: '22,30',
    change: '-8.55%',
  }
]

const menuItems = [
  'Видео',
  'Картинки',
  'Новости',
  'Карты',
  'Маркет',
  'Переводчик',
  'Эфир',
]

const cards = new Array(12).fill({
  title: 'Посещаемое',
  descriptionArr: [
    'Недвижимость',
    'Движимость',
    'Что-то ещё',
    'Ну и последнее',
  ]
})

function App() {

  return (
    <div className='container'>

      <TopModule>
        <TopModuleLeft>
          <TopModuleLeftTop country='В Германии' time='7 ноября вторник 16.23' />
          <TopModuleLeftMiddle news={news} />
          <TopModuleLeftBottom items={items} />
        </TopModuleLeft>
        <TopModuleRight img={''} title='Some aside title' text='Some text aside' />
      </TopModule>
      <MiddleModule>
        <MiddleMenu menuItems={menuItems} />
        <MiddleInput>
          <Logo src='../public/The_Simpsons_yellow_logo.svg' />
          <Input tip='Найдётся всё, например' link='some link' />
          <Button />
        </MiddleInput>
        <Advertisement text='Ad here nobody interested in' />
      </MiddleModule>
      <BottomModule cards={cards} />

    </div>
  )
}

export default App
