

const Footer = () => {
    return (
      <footer className="bg-white text-gray-800 py-2 border-t border-gray-300 fixed bottom-0 left-0 w-full"> {/* Fixed position */}
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <h2 className="text-lg font-bold mr-4">Contact Us:</h2>
            <div className="flex space-x-4">
                <a href="#" className="hover:text-green-400">Email</a>
                <a href="#" className="hover:text-green-400">Instagram</a>
            </div>
          </div>
          <div>
            <p>&copy; {new Date().getFullYear()} BiteMap. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
