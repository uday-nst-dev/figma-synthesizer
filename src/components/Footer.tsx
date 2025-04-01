
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Facebook, Twitter, Instagram, Linkedin, Youtube
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1A1D2B] text-white">
      <div className="container mx-auto py-12">
        <div className="flex flex-col lg:flex-row">
          <div className="mb-8 lg:mb-0 lg:w-1/3 pr-8">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <span className="font-bold text-xl">JobHunty</span>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Great platform for the job seeker that searching for
              new career heights and passionate about startups.
            </p>
            <p className="text-gray-400 text-sm">
              © 2023 JobHunty. All rights reserved.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:w-2/3">
            <div>
              <h3 className="font-bold mb-4">About</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Companies</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">Terms</a></li>
                <li><a href="#" className="hover:text-white">Advice</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Resources</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Help Docs</a></li>
                <li><a href="#" className="hover:text-white">Guide</a></li>
                <li><a href="#" className="hover:text-white">Updates</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h3 className="font-bold mb-4">Get job notifications</h3>
              <p className="text-sm text-gray-400 mb-4">
                The latest job news, articles, sent to your inbox weekly.
              </p>
              <div className="flex space-x-0">
                <Input 
                  placeholder="Email address" 
                  className="rounded-r-none bg-[#2A2E3D] border-[#2A2E3D] text-white" 
                />
                <Button className="rounded-l-none bg-primary hover:bg-primary-dark">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © 2023 JobHunty. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <Facebook size={18} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Twitter size={18} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Instagram size={18} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Linkedin size={18} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Youtube size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
