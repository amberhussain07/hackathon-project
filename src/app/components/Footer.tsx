const Footer = () => {
    return (
      <footer className="bg-white p-8 border-t">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div>
            <h1 className="text-2xl font-bold text-blue-600 mb-2">MORENT</h1>
            <p className="text-gray-500 text-sm">
              Our vision is to provide convenience and help increase your sales business.
            </p>
          </div>
  
          {/* About */}
          <div>
            <h3 className="font-semibold mb-2 text-gray-800">About</h3>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li>How it works</li>
              <li>Featured</li>
              <li>Partnership</li>
              <li>Business Relation</li>
            </ul>
          </div>
  
          {/* Community */}
          <div>
            <h3 className="font-semibold mb-2 text-gray-800">Community</h3>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li>Events</li>
              <li>Blog</li>
              <li>Podcast</li>
              <li>Invite a friend</li>
            </ul>
          </div>
  
          {/* Socials */}
          <div>
            <h3 className="font-semibold mb-2 text-gray-800">Socials</h3>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li>Discord</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Facebook</li>
            </ul>
          </div>
        </div>
  
        {/* Bottom Section */}
        <div className="mt-8 border-t pt-4 flex flex-col md:flex-row justify-between text-black text-sm">
          <p>©2022 MORENT. All rights reserved</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#" className="hover:underline">Privacy & Policy</a>
            <a href="#" className="hover:underline">Terms & Condition</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  