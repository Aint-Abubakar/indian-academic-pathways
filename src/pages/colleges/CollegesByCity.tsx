
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getCollegesByCity, FilterOptions } from "@/data/collegeData";
import CollegeCard from "@/components/college/CollegeCard";
import SearchFilters from "@/components/college/SearchFilters";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

const CollegesByCity = () => {
  const { cityId } = useParams<{ cityId: string }>();
  const [colleges, setColleges] = useState(getCollegesByCity(cityId || ""));
  const [filteredColleges, setFilteredColleges] = useState(colleges);
  const [filters, setFilters] = useState<FilterOptions>({
    searchQuery: "",
    courseType: "",
    collegeType: "",
    ratingMin: 0,
    feeRange: ""
  });
  
  // When cityId changes, get fresh colleges
  useEffect(() => {
    if (cityId) {
      const cityColleges = getCollegesByCity(cityId);
      setColleges(cityColleges);
      applyFilters(cityColleges, filters);
    }
  }, [cityId]);
  
  // Apply filters to the list of colleges
  const applyFilters = (collegeList = colleges, currentFilters = filters) => {
    let filtered = [...collegeList];
    
    // Apply search query filter
    if (currentFilters.searchQuery) {
      const query = currentFilters.searchQuery.toLowerCase();
      filtered = filtered.filter(college => 
        college.name.toLowerCase().includes(query) ||
        college.description.toLowerCase().includes(query)
      );
    }
    
    // Apply course type filter
    if (currentFilters.courseType) {
      filtered = filtered.filter(college => 
        college.courses.some(course => 
          course.toLowerCase().includes(currentFilters.courseType.toLowerCase())
        )
      );
    }
    
    // Apply college type filter
    if (currentFilters.collegeType) {
      filtered = filtered.filter(college => 
        college.type === currentFilters.collegeType
      );
    }
    
    // Apply rating filter
    if (currentFilters.ratingMin > 0) {
      filtered = filtered.filter(college => 
        college.rating >= currentFilters.ratingMin
      );
    }
    
    // Apply fee range filter
    if (currentFilters.feeRange) {
      const [minStr, maxStr] = currentFilters.feeRange.split('-');
      const min = Number(minStr);
      const max = maxStr === "+" ? Infinity : Number(maxStr);
      
      filtered = filtered.filter(college => {
        const avgFee = (college.fees.tuition.min + college.fees.tuition.max) / 2;
        return avgFee >= min && avgFee <= max;
      });
    }
    
    setFilteredColleges(filtered);
  };
  
  const handleFilterChange = (newFilters: FilterOptions) => {
    setFilters(newFilters);
    applyFilters(colleges, newFilters);
  };
  
  // Format city name from ID
  const cityName = cityId ? cityId.charAt(0).toUpperCase() + cityId.slice(1) : "";
  
  return (
    <div className="py-12">
      <div className="section-container">
        <Link to="/colleges">
          <Button variant="ghost" className="mb-6">
            <ChevronLeft className="h-4 w-4 mr-2" />
            Back to Cities
          </Button>
        </Link>
        
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Colleges in {cityName}</h1>
          <p className="text-lg text-muted-foreground">
            Explore top colleges and educational institutions in {cityName}
          </p>
        </div>
        
        <SearchFilters onFilterChange={handleFilterChange} />
        
        {filteredColleges.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredColleges.map((college) => (
              <CollegeCard 
                key={college.id} 
                college={college} 
                cityId={cityId || ""} 
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">No colleges found matching your filters</p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => handleFilterChange({
                searchQuery: "",
                courseType: "",
                collegeType: "",
                ratingMin: 0,
                feeRange: ""
              })}
            >
              Clear all filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CollegesByCity;
