import '../styles/view.css'

const ViewLayout = ({ children }) => {
    return (
        <section className='view'>
            { children }
        </section>
    )
}

export default ViewLayout