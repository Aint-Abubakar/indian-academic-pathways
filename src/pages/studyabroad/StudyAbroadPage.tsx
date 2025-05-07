
import { useEffect } from "react";
import PageLayout from "@/components/PageLayout";
import CountryCard from "@/components/studyabroad/CountryCard";
import { countries } from "@/data/studyAbroadData";
import { Globe } from "lucide-react";

const StudyAbroadPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageLayout title="Study Abroad Opportunities">
      <div className="container max-w-7xl mx-auto py-8 px-4 md:px-6">
        <div className="space-y-6">
          <div className="text-center space-y-4 mb-8">
            <h1 className="text-3xl md:text-4xl font-bold">Study Abroad Opportunities</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore top universities from around the world and their scholarship opportunities for Indian students
            </p>
          </div>

          <div className="bg-secondary p-4 md:p-6 rounded-lg mb-8">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="bg-nextstep-blue/10 p-4 rounded-full">
                <Globe className="h-8 w-8 text-nextstep-blue" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">Why Study Abroad?</h2>
                <p className="text-muted-foreground">
                  Studying abroad provides invaluable international exposure, access to world-class education, 
                  diverse cultural experiences, and enhanced career opportunities. Many countries offer 
                  generous scholarships to make quality education more accessible for Indian students.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mb-4">Popular Destinations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {countries.map((country) => (
              <CountryCard key={country.id} country={country} />
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-nextstep-blue to-nextstep-purple p-6 md:p-8 rounded-lg text-white">
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-bold">Need Help With Your Study Abroad Journey?</h2>
              <p>
                Our counselors can guide you through university selection, application process, 
                visa requirements, and scholarship opportunities.
              </p>
              <button className="bg-white text-nextstep-blue hover:bg-white/90 px-6 py-2 rounded-md font-medium">
                Book a Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default StudyAbroadPage;
