
import { useState } from "react";
import { states } from "@/data/collegeData";
import StateCard from "@/components/college/StateCard";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const TopCollegesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredStates = states.filter(state => 
    state.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <div className="py-12">
      <div className="section-container">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Find Top Colleges by State</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore prestigious colleges across India. Select a state to view detailed college profiles,
            admission requirements, and scholarship opportunities.
          </p>
        </div>
        
        <div className="flex justify-center mb-8">
          <div className="relative max-w-md w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input 
              placeholder="Search states..." 
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredStates.map((state) => (
            <StateCard key={state.id} state={state} />
          ))}
          
          {filteredStates.length === 0 && (
            <div className="col-span-full text-center py-12">
              <p className="text-xl text-muted-foreground">No states found matching "{searchQuery}"</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopCollegesPage;
