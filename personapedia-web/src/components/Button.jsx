import '../styles/button.css'

const Button = ({ type = 'primary', text }) => {
  return (
    <div className={ `button ${type}` }>{ text }</div>
  )
}

export default Button