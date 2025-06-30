
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary py-8 border-t">
      <div className="section-container">
        <div className="flex justify-center mb-8">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-nextstep-blue to-nextstep-purple p-1 rounded-md">
              <span className="text-white font-bold text-xl">N</span>
            </div>
            <span className="font-heading font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-nextstep-blue to-nextstep-purple">
              NextStep
            </span>
          </Link>
        </div>
        
        <div className="border-t border-border pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} NextStep. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-4 md:mt-0">
            Made with ❤️ for Indian students
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
