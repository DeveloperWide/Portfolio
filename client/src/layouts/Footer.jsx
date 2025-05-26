import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#33ffff22] hover:text-black">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          {/* Company */}
          <div>
            <h2 className="mb-6 text-sm text-black font-bold uppercase">Company</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              {["About", "Careers", "Brand Center", "Blog"].map((item, idx) => (
                <li key={idx} className="mb-4">
                  <a href="#" className="hover:text-gray-600 text-gray-800">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Center */}
          <div>
            <h2 className="mb-6 text-sm text-black font-bold uppercase">Help Center</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              {["Discord Server", "Twitter", "Facebook", "Contact Us"].map((item, idx) => (
                <li key={idx} className="mb-4">
                  <a href="#" className="text-gray-800 hover:text-gray-600">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h2 className="mb-6 text-sm text-black font-bold uppercase">Legal</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              {["Privacy Policy", "Licensing", "Terms & Conditions"].map((item, idx) => (
                <li key={idx} className="mb-4">
                  <a href="#" className="text-gray-800 hover:text-gray-600">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Download */}
          <div>
            <h2 className="mb-6 text-sm text-black font-bold uppercase">Download</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              {["iOS", "Android", "Windows", "MacOS"].map((item, idx) => (
                <li key={idx} className="mb-4">
                  <a href="#" className="text-gray-800 hover:text-gray-600">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        
        </div>
    </footer>
  );
};

export default Footer;
