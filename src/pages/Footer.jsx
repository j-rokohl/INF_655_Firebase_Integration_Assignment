import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {

return (
    <div className="footer txt-center">
        <h3>Get Connected</h3>
        <div>
            <FaFacebook size={30} />
            <FaInstagram size={30} />
            <FaTwitter size={30} />
        </div>
    </div>
    )
}