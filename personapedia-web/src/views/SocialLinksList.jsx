import Head from '../components/Head'
import SocialLinkCard from '../components/SocialLinkCard/SocialLinkCard'
import ViewLayout from './ViewLayout'

const SocialLinksList = () => {
    return (
        <ViewLayout>
            <Head />
            <div>
                <SocialLinkCard />
            </div>
        </ViewLayout>
    )
}

export default SocialLinksList