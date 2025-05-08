import '../styles/button.css'

const Button = ({ type = 'primary', text }) => {
  return (
    <div className={ `button button-${type} pointer` }>{ text }</div>
  )
}

export default Button