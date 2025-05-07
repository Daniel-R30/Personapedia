import Button from './components/Button'
import Header from './components/Header'
import Tag from './components/Tag'

import './styles/style.css'
import SocialLinksList from './views/SocialLinksList'
import ViewLayout from './views/ViewLayout'

function App () {

    return (
        <>
            <Header />
            <SocialLinksList />
            <ViewLayout>
                <div className='column-group'>
                    <div className='row-group'>
                        <Tag type='jester' />
                        <Tag type='hunger' />
                        <Tag type='chariot' />
                        <Tag type='fortune' />
                        <Tag type='priestess' />
                        <Tag type='lovers' />
                        <Tag type='date' date='april-18' />
                    </div>

                    <div className='row-group'>
                        <Button text='primary' />
                        <Button type='secondary' text='secondary' />
                        <Button type='outline' text='outline' />
                        <Button type='header' text='Login/Sign up' />
                    </div>
                </div>
            </ViewLayout>
        </>
    )
}

export default App
