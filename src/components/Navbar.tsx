import { Link } from "@tanstack/react-router"
import { Diamonds } from "@icon-park/react"

const Navbar = () => {
  return <div className='bg-white shadow-md border-spacing-3 border-b-2 border-gray-200 mb-6'>
        <div className="container m-auto h-16 flex items-center bg-blue-200">
          <div className="flex items-center text-destructive gap-1">
            <Diamonds theme="outline" size="24" />
            <Link to="/" className='uppercase'>  xiaogenban.com </Link>
          </div>
          <Link to="/front/live" className='ml-4 text-blue-500 hover:text-blue-700'>晚上八点直播</Link>
        </div> 
     </div>
}

export default Navbar
