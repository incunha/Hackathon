
import './ContactCard.scss'; 

const ContactCard = () => {
    const title = "Contact us";
    const description = "Want to learn more about how QuakeAway is changing the future of space construction? We'd love to hear from you! Get in touch with our team:";
    const email = "info@quakeaway.com";
    const phone = "+1-800-QUAKEAWAY";
    const phrase = "Let's make space a safer place—together!";

    return (
        <div className="contact-card">
            <h5 className="contact-title">{title}</h5>
            <div className="contact-content">
                <div className="contact-description">
                    {description}
                </div>
                <div className="contact-info">
                    <p><strong>Email:</strong> {email}</p>
                    <p><strong>Phone:</strong> {phone}</p>
                </div>
            </div>
            <p className="contact-phrase">{phrase}</p>
        </div>
    );
};

export default ContactCard;

