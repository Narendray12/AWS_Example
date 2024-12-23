import { FaGithub, FaDiscord, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-slate-900 border-t border-slate-800 mt-20">
      <div className="max-w-7xl mx-auto py-4 sm:py-6 lg:py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
          <div className="flex items-center space-x-4 sm:space-x-6">
            <a
              href="mailto: narendraydv12@gmail.com"
              className="text-amber-500 hover:text-amber-400 transition-colors p-2"
              aria-label="Email"
            >
              <FaEnvelope className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href="discordapp.com/users/Narendra"
              className="text-amber-500 hover:text-amber-400 transition-colors p-2"
              aria-label="Discord"
            >
              <FaDiscord className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href="https://github.com/Narendray12"
              className="text-amber-500 hover:text-amber-400 transition-colors p-2"
              aria-label="GitHub"
            >
              <FaGithub className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </div>
          <p className="text-purple-300 font-mono text-sm lg:text-xl text-center">
            Made with <span className="text-pink-500 animate-pulse">&lt;3</span>, Thank You!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;