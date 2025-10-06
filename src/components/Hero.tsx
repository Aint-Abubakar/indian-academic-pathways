
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white to-secondary/30">
      <div className="section-container">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter fade-in-element">
              Your Path to Academic &amp; Career{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-nextstep-blue to-nextstep-purple">
                Success
              </span>
            </h1>
            <p className="mx-auto max-w-[800px] text-muted-foreground text-lg md:text-xl fade-in-element">
              Discover scholarships, colleges, courses, exams, and career paths tailored for Indian students.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-6">
              <Button asChild size="lg" className="bg-gradient-to-r from-nextstep-blue to-nextstep-purple hover:opacity-90 hover:shadow-2xl hover:scale-110 group">
                <Link to="/scholarships">
                  Explore Scholarships <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-nextstep-blue text-nextstep-blue hover:bg-nextstep-blue/10 hover:shadow-lg hover:scale-110 group">
                <Link to="/free-courses">
                  Browse Free Courses
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
