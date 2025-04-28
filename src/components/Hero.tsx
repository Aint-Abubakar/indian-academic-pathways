
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-secondary/30">
      <div className="section-container">
        <div className="flex flex-col items-center text-center">
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter animate-fade-in">
              Your Path to Academic &amp; Career{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-nextstep-blue to-nextstep-purple">
                Success
              </span>
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl animate-fade-in">
              Discover scholarships, colleges, courses, exams, and career paths tailored for Indian students.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-4 justify-center animate-fade-in">
            <Button asChild size="lg" className="bg-gradient-to-r from-nextstep-blue to-nextstep-purple hover:opacity-90">
              <Link to="/explore">Explore Resources</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
          <div className="mt-12 rounded-lg border bg-card p-4 md:p-8 shadow-sm animate-fade-in">
            <h3 className="text-xl font-semibold mb-4">Quick Navigation</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link to="/scholarships" className="bg-secondary rounded-md p-3 text-center hover:bg-secondary/80 transition-colors">
                <span className="font-medium">Scholarships</span>
              </Link>
              <Link to="/colleges" className="bg-secondary rounded-md p-3 text-center hover:bg-secondary/80 transition-colors">
                <span className="font-medium">Colleges</span>
              </Link>
              <Link to="/courses" className="bg-secondary rounded-md p-3 text-center hover:bg-secondary/80 transition-colors">
                <span className="font-medium">Courses</span>
              </Link>
              <Link to="/exams" className="bg-secondary rounded-md p-3 text-center hover:bg-secondary/80 transition-colors">
                <span className="font-medium">Entrance Exams</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
