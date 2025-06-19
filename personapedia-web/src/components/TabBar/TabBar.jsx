import '../../styles/tabBar.css'
import Tab from './Tab'

const TabBar = () => {
    return (
        <div className='tab-bar'>
            <Tab text='Social Links' active />
            <Tab text='Fusion Calculator' />
        </div>
    )
}

export default TabBar