import Button from '../Button'
import Tag from '../Tag'
import '../../styles/SocialLinkCard.css'

const SocialLinkCard = () => {
    return (
        <section className='social-link-card' >
            <img className='social-link-card__image' src='https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000060320/c0a375d02bff3def365bd98f274fd248c3d313c5f4fdd62590fed270185a9b69' />
            <div className='social-link-card__body column-group gap-3 align-center' >
                <div className='social-link-card__body__text column-group gap-2'>
                    <div className='column-group gap-1'>
                        <h4>Name</h4>
                        <div className='row-group gap-1 wrap' >
                            <Tag type='jester' />
                            <Tag type='lovers' />
                        </div>
                    </div>
                    <p className='social-link-card__description'>The Magician Arcana Social Link is represented by Yosuke Hanamura, a classmate of the protagonist. The Social Link is the first Social Link forged storyline wise, where it was initiated after the protagonist and Yosuke ventures into the Midnight Channel to investigate the death behind Saki Konishi.</p>
                </div>
                <Button text='See more ->' />
            </div>
        </section>
    )
}

export default SocialLinkCard