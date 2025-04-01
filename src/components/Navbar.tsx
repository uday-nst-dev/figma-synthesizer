
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  return (
    <nav className="w-full py-4 px-4 md:px-10 bg-white flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <Link to="/" className="text-primary font-bold text-xl flex items-center">
          <div className="w-6 h-6 bg-primary rounded flex items-center justify-center text-white mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </div>
          JobHunty
        </Link>
        <div className="hidden md:flex space-x-6 ml-10 text-sm text-text">
          <Link to="/" className="hover:text-primary font-medium">Find Jobs</Link>
          <Link to="/jobs" className="hover:text-primary">Browse Companies</Link>
        </div>
      </div>
      <div className="flex items-center space-x-3">
        <Link to="/login" className="text-sm font-medium hover:text-primary">Login</Link>
        <Button className="bg-primary hover:bg-primary-dark text-sm px-5 py-2 h-auto" size="sm">
          Sign Up
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
