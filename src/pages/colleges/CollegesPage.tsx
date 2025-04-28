
import { useState } from "react";
import { cities } from "@/data/collegeData";
import CityCard from "@/components/college/CityCard";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const CollegesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredCities = cities.filter(city => 
    city.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    city.state.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <div className="py-12">
      <div className="section-container">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Find Colleges by City</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore thousands of colleges across India. Select a city to view detailed college profiles,
            admission requirements, and scholarship opportunities.
          </p>
        </div>
        
        <div className="flex justify-center mb-8">
          <div className="relative max-w-md w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input 
              placeholder="Search cities..." 
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredCities.map((city) => (
            <CityCard key={city.id} city={city} />
          ))}
          
          {filteredCities.length === 0 && (
            <div className="col-span-full text-center py-12">
              <p className="text-xl text-muted-foreground">No cities found matching "{searchQuery}"</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CollegesPage;
