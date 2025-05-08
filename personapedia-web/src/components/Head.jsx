import GameSelector from './GameSelector'
import TabBar from './TabBar/TabBar'

const Head = () => {
    return (
        <section className='column-group gap-3'>
            <div className='column-group gap-1'>
                <GameSelector />
                <h3>Descubre lo que la niebla intenta ocultar.</h3>
            </div>
            <TabBar />
        </section>
    )
}

export default Head