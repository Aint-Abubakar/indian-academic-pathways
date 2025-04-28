
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Search, X } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="section-container">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-nextstep-blue to-nextstep-purple p-1 rounded-md">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <span className="font-heading font-bold text-xl sm:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-nextstep-blue to-nextstep-purple">
                NextStep
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-sm font-medium transition-colors hover:text-nextstep-blue">
              Home
            </Link>
            <Link to="/about" className="text-sm font-medium transition-colors hover:text-nextstep-blue">
              About
            </Link>
            <Link to="/contact" className="text-sm font-medium transition-colors hover:text-nextstep-blue">
              Contact
            </Link>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="w-64 pl-8 rounded-full bg-background"
              />
            </div>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden md:flex">
              Sign In
            </Button>
            <Button className="hidden md:flex bg-gradient-to-r from-nextstep-blue to-nextstep-purple hover:opacity-90">
              Get Started
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden animate-fade-in">
          <div className="pt-2 pb-3 px-4 space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-secondary"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-secondary"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-secondary"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-2 pb-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search..."
                  className="w-full pl-9"
                />
              </div>
            </div>
            <div className="pt-2 space-y-2">
              <Button variant="outline" className="w-full">Sign In</Button>
              <Button className="w-full bg-gradient-to-r from-nextstep-blue to-nextstep-purple">Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
