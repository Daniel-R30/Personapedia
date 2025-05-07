import '../styles/header.css'
import Button from './Button'

const Header = () => {
  return (
    <div className='header'>
        <h2>Personapedia</h2>
        <div className='row-group'>
            <Button type='header' text='Sign up' />
            <Button type='header' text='Login' />
        </div>
    </div>
  )
}

export default Header