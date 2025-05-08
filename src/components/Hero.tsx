
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-secondary/30">
      <div className="section-container">
        <div className="flex flex-col items-center text-center">
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter fade-in-element">
              Your Path to Academic &amp; Career{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-nextstep-blue to-nextstep-purple">
                Success
              </span>
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl fade-in-element">
              Discover scholarships, colleges, courses, exams, and career paths tailored for Indian students.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-4 w-full max-w-4xl fade-in-element">
            <Link to="/scholarships" className="bg-secondary rounded-md p-3 text-center hover:bg-secondary/80 transition-colors">
              <span className="font-medium">Scholarships</span>
            </Link>
            <Link to="/colleges" className="bg-secondary rounded-md p-3 text-center hover:bg-secondary/80 transition-colors">
              <span className="font-medium">Colleges</span>
            </Link>
            <Link to="/free-courses" className="bg-secondary rounded-md p-3 text-center hover:bg-secondary/80 transition-colors">
              <span className="font-medium">Free Courses</span>
            </Link>
            <Link to="/exams" className="bg-secondary rounded-md p-3 text-center hover:bg-secondary/80 transition-colors">
              <span className="font-medium">Exams</span>
            </Link>
            <Link to="/careers" className="bg-secondary rounded-md p-3 text-center hover:bg-secondary/80 transition-colors">
              <span className="font-medium">Careers</span>
            </Link>
            <Link to="/top-colleges" className="bg-secondary rounded-md p-3 text-center hover:bg-secondary/80 transition-colors">
              <span className="font-medium">Top Colleges</span>
            </Link>
            <Link to="/study-abroad" className="bg-secondary rounded-md p-3 text-center hover:bg-secondary/80 transition-colors">
              <span className="font-medium">Study Abroad</span>
            </Link>
            <Link to="/news" className="bg-secondary rounded-md p-3 text-center hover:bg-secondary/80 transition-colors">
              <span className="font-medium">News</span>
            </Link>
            <Link to="/success-stories" className="bg-secondary rounded-md p-3 text-center hover:bg-secondary/80 transition-colors">
              <span className="font-medium">Success Stories</span>
            </Link>
            <Link to="/resources" className="bg-secondary rounded-md p-3 text-center hover:bg-secondary/80 transition-colors">
              <span className="font-medium">Resources</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
