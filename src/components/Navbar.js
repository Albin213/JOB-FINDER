import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="bg-blue-600 shadow-md sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <span className="text-white font-semibold text-xl">JobFinder</span>
            </Link>
            <div className="hidden md:flex ps-4 ">
              <Link href="/jobs">
                <span className="text-white hover:text-gray-200">Search Jobs</span>
              </Link>
             
            </div>
          </div>
          <div className="flex items-center space-x-4">
          
              <span className="text-white hover:text-gray-200 cursor-pointer">Login</span>
          
       
              <span className="text-white bg-green-500 hover:bg-green-400 px-4 py-2 rounded-lg cursor-pointer">Sign Up</span>
      
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
