import "./Footer.css"
import { FaFacebookF, FaWhatsapp, FaLinkedinIn, FaDiscord, FaInstagram, FaTwitter, FaViber } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#0C1015] max-[425px]:w-full">
      <footer className="footer   grid-rows-2 p-10 text-neutral-content ">
        <nav>
          <header className="footer-title">DENVER AREAS</header>
          <a className="cursor-pointer foot">Arvada Real Estate</a>
          <a className="cursor-pointer foot">Cherry Real Estate</a>
          <a className="cursor-pointer foot">Denver Real Estate</a>
          <a className="cursor-pointer foot">Company Estate</a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="cursor-pointer foot">Home</a>
          <a className="cursor-pointer foot">All properties</a>
          <a className="cursor-pointer foot">Dashboard</a>
          <a className="cursor-pointer foot">Login</a>
        </nav>
        <nav>
          <header className="footer-title">     </header>

          <a className="cursor-pointer foot">Terms of use</a>
          <a className="cursor-pointer foot">Privacy policy</a>
          <a className="cursor-pointer foot">Cookie policy</a>
        </nav>
        <nav>
          <header className="footer-title">Apps</header>
          <a className="cursor-pointer foot">Mac</a>
          <a className="cursor-pointer foot">Windows</a>
          <a className="cursor-pointer foot">iPhone</a>
          <a className="cursor-pointer foot">Android</a>
        </nav>
        <nav>
          <header className="footer-title">     </header>

          <a className="cursor-pointer foot">Estate of Bd</a>
          <a className="cursor-pointer foot">Real Estate</a>
          <a className="cursor-pointer foot">Estate India</a>
        </nav>
        <nav>
          <header className="footer-title">Management</header>
          <a className="cursor-pointer foot">Estate business</a>
          <a className="cursor-pointer foot">Estate Window</a>
          <a className="cursor-pointer foot">Estate Iphone</a>
          <a className="cursor-pointer foot">Estate Android</a>
        </nav>
        <nav>
          <header className="footer-title">     </header>

          <a className="cursor-pointer foot">Estate Privacy</a>
          <a className="cursor-pointer foot">Estate policy</a>
          <a className="cursor-pointer foot">Estate Cookie policy</a>
        </nav>
        <nav>
          <header className="footer-title">App</header>
          <a className="cursor-pointer foot">Mac</a>
          <a className="cursor-pointer foot">Windows</a>
          <a className="cursor-pointer foot">iPhone</a>
          <a className="cursor-pointer foot">Android</a>
        </nav>


        <nav>
          <header className="footer-title">    </header>
          <a className="cursor-pointer foot">Enterprise Est</a>
          <a className="cursor-pointer foot">Enter Estate</a>
          <a className="cursor-pointer foot">Estate Security</a>
          <a className="cursor-pointer foot">Pricing Build</a>
        </nav>
        <nav>
          <header className="footer-title">Social</header>
          <div className="grid grid-cols-5 gap-4">
            <a className="footIcon"><FaFacebookF></FaFacebookF></a>
            <a className="footIcon"><FaWhatsapp></FaWhatsapp></a>
            <a className="footIcon"><FaLinkedinIn></FaLinkedinIn></a>
            <a className="footIcon"><FaDiscord></FaDiscord></a>
            <a className="footIcon"><FaInstagram></FaInstagram></a>
            <a className="footIcon"><FaTwitter /></a>
            <a className="footIcon"><FaViber /></a>
          </div>
        </nav>

      </footer>
    </div>
  );
};

export default Footer;