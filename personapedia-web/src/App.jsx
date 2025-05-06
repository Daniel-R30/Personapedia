import Button from './components/Button'
import Tag from './components/Tag'

import './styles/style.css'

function App () {

    return (
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
                <Button type='header' text='Login/Sign up aaaaaaaaaaaa' />
            </div>

        </div>
    )
}

export default App
