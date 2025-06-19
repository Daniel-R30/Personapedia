import '../styles/tag.css'

const Tag = ({ type, date }) => {
    return (
        <div className={ `tag tag--${ type }` } >{ type === 'date' ? `STARTS: ${ date.toUpperCase() }` : type.toUpperCase() }</div>
    )
}

export default Tag