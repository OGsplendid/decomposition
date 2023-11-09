import './Logo.css'

type TLogoProps = {
  src: string;
}

export const Logo = ({ src }: TLogoProps) => {
  return (
    <img className='logo' src={src} />
  )
}