import  {THANKS_IMG} from "../utils/constants"

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="contact-info">
                <h1>Contact Us</h1>
                <p><strong>Email:</strong> info@ourfoodapp.com</p>
                <p><strong>Phone:</strong> +1 234 567 890</p>
                <p><strong>Address:</strong> 123 Main St, Anytown, USA</p>
            </div>
            <div className="contact-form">
                <h2>Send us a message</h2>
                <form>
                    <input type="text" placeholder="Your Name" />
                    <input type="email" placeholder="Your Email" />
                    <textarea placeholder="Your Message"></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div className="contact-thanks">
                <img src={THANKS_IMG} alt="Thanks for visiting" />
            </div>
        </div>
    );
}

export default Contact;