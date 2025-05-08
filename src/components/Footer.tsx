
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary py-8 border-t">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-nextstep-blue to-nextstep-purple p-1 rounded-md">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <span className="font-heading font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-nextstep-blue to-nextstep-purple">
                NextStep
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Guiding Indian students through important academic and career decisions.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-sm">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/" className="hover:text-nextstep-blue">Home</Link></li>
              <li><Link to="/about" className="hover:text-nextstep-blue">About Us</Link></li>
              <li><Link to="/scholarships" className="hover:text-nextstep-blue">Scholarships</Link></li>
              <li><Link to="/free-courses" className="hover:text-nextstep-blue">Free Courses</Link></li>
              <li><Link to="/exams" className="hover:text-nextstep-blue">Entrance Exams</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-sm">Resources</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/colleges" className="hover:text-nextstep-blue">Colleges</Link></li>
              <li><Link to="/careers" className="hover:text-nextstep-blue">Career Paths</Link></li>
              <li><Link to="/study-abroad" className="hover:text-nextstep-blue">Study Abroad</Link></li>
              <li><Link to="/news" className="hover:text-nextstep-blue">Education News</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t border-border pt-4 flex flex-col md:flex-row justify-between items-center">
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
