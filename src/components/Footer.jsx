import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <img src="/logo.svg" alt="Zestly" className="h-8 w-auto mb-4" />
            <p className="text-gray-600 max-w-md">
              Transforming retail data into fresh insights that drive healthy growth for small and medium retailers.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-zestly-primary">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-zestly-primary">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-zestly-primary">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-zestly-primary">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-zestly-primary">
                <FaLinkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-zestly-primary">
                <FaGithub size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} Zestly. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
