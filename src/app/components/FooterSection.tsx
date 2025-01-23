import React from "react";

const FooterSection = () => {
  return (
    <footer className="bg-black text-gray-400 py-8 w-[100%]">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          <div className="mb-6 md:mb-0">
            <img
              src="/images/logo.svg"
              alt="DevOptima Logo"
              className="w-32 mb-4"
            />
            <p className="mt-20">Devoptima 2023 © All rights reserved</p>
          </div>

          {/* Links Sections */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
            {/* Resources */}
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Docs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Release notes
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Security
                  </a>
                </li>
              </ul>
            </div>

            {/* Community */}
            <div>
              <h3 className="text-white font-semibold mb-4">Community</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition flex">
                    <img className="mr-2" src="/images/twitter.svg"></img>
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition flex">
                    <img className="mr-2" src="/images/linkedin.svg"></img>
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition flex">
                    <img className="mr-2" src="/images/github.svg"></img>
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition flex">
                    <img className="mr-2" src="/images/discord.svg"></img>
                    Discourse
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Privacy policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Terms of service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
