import { FaLinkedin, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SocialIcons = () => {
  return (
    <div className="flex gap-3">
      <a
        href="#"
        className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full hover:bg-black hover:text-white transition duration-300"
      >
        <FaLinkedin size={18} />
      </a>

      <a
        href="#"
        className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full hover:bg-black hover:text-white transition duration-300"
      >
        <FaFacebook size={18} />
      </a>

      <a
        href="#"
        className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full hover:bg-black hover:text-white transition duration-300"
      >
        <FaXTwitter size={18} />
      </a>

      <a
        href="#"
        className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full hover:bg-black hover:text-white transition duration-300"
      >
        <FaInstagram size={18} />
      </a>

      <a
        href="#"
        className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full hover:bg-black hover:text-white transition duration-300"
      >
        <FaYoutube size={18} />
      </a>
    </div>
  );
};

export default SocialIcons;