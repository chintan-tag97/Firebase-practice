import { Link } from 'react-router-dom'

const Design = () => {
  return (
    <div className="min-h-screen bg-gray-300">
      <nav className="bg-gradient-to-r from-blue-900 via-blue-400 to-pink-300 bg-opacity-75 py-4 shadow-lg">
        <ul className="flex justify-center space-x-6">
          <li><Link to="/home" className="hover:text-red-600 transition duration-300">Home</Link></li>
          <li><Link to="/about" className="hover:text-red-600 transition duration-300">About</Link></li>
          <li><Link to="/services" className="hover:text-red-600 transition duration-300">Services</Link></li>
          <li><Link to="/contact" className="hover:text-red-600 transition duration-300">Contact</Link></li>
          <li><Link to="/datatable" className="hover:text-red-600 transition duration-300">Datatable</Link></li>
          <li><Link to="/login" className="hover:text-red-600 transition duration-300">Login</Link></li>

        </ul>
      </nav>
      <header className="bg-opacity-90   bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-center py-8 shadow-md">
        <h1 className="text-4xl  text-white font-extrabold drop-shadow-lg">Welcome to the <span className="text-blue-500">Design Page</span></h1>
      </header>
      <main className="p-6">
        <div className="bg-gradient-to-r from-pink-900 via-blue-700 to-blue-300 text-white bg-opacity-20 rounded-lg shadow-lg p-8">
          <h2 className="text-2xl text-white font-semibold mb-4">Explore Our Features</h2>
          <p className="text-base  text-white font-light">This page is styled with Tailwind CSS to look modern and creative.</p>
        </div>
      </main>
    </div>
  )
  
  
}

export default Design