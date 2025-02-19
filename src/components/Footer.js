const Footer = () => {
    return (
      <footer className="bg-gray-700 text-gray-300 py-6 mt-10">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">


          <p className="text-sm">&copy; {new Date().getFullYear()} JobFinder. All rights reserved.</p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span  className="hover:text-white transition-colors">
                Privacy Policy
                </span>
            <span  className="hover:text-white transition-colors">Terms of Service</span>
            
            <span  className="hover:text-white transition-colors">Contact</span>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  