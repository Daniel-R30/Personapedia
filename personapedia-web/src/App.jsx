import './styles/styles.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Button from './components/Button'
import Header from './components/Header'
import SocialLinksList from './views/SocialLinksList'
import Tag from './components/Tag'
import ViewLayout from './views/ViewLayout'

function App () {

    return (
        <>
            <Header />
            <SocialLinksList />
            <ViewLayout>
                <div className='column-group gap-2'>
                    <div className='row-group gap-1'>
                        <Tag type='jester' />
                        <Tag type='hunger' />
                        <Tag type='chariot' />
                        <Tag type='fortune' />
                        <Tag type='priestess' />
                        <Tag type='lovers' />
                        <Tag type='date' date='april-18' />
                    </div>

                    <div className='row-group gap-1'>
                        <Button text='primary' />
                        <Button type='outline' text='outline' />
                        <Button type='header' text='Login/Sign up' />
                    </div>
                </div>
            </ViewLayout>
        </>
    )
}

export default App
