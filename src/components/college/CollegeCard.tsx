
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { College } from "@/data/collegeData";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface CollegeCardProps {
  college: College;
  stateId: string;
}

const CollegeCard = ({ college, stateId }: CollegeCardProps) => {
  return (
    <Link to={`/top-colleges/${stateId}/${college.id}`} className="block">
      <Card className="card-hover fade-in-element h-full">
        <CardContent className="p-0">
          <div className="relative">
            <div 
              className="h-40 w-full bg-secondary/50 bg-cover bg-center rounded-t-lg"
              style={{ 
                backgroundImage: college.imageUrl 
                  ? `url(${college.imageUrl})` 
                  : "url('/placeholder.svg')"
              }}
            >
              <div className="absolute top-2 right-2 bg-white rounded-full px-2 py-1 flex items-center shadow-sm">
                <Star className="h-4 w-4 text-nextstep-yellow fill-nextstep-yellow mr-1" />
                <span className="font-medium text-sm">{college.rating}</span>
              </div>
            </div>
            <div className="p-5 space-y-3">
              <h3 className="text-lg font-semibold line-clamp-2">{college.name}</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">{college.description}</p>
              <div className="flex items-center justify-between">
                <span className={cn(
                  "inline-flex items-center justify-center px-2.5 py-0.5 rounded-full text-xs font-medium",
                  college.type === "Government" 
                    ? "bg-nextstep-green/10 text-nextstep-green" 
                    : "bg-nextstep-purple/10 text-nextstep-purple"
                )}>
                  {college.type}
                </span>
                <span className="text-sm text-muted-foreground">
                  Placement: {college.placement.percentage}%
                </span>
              </div>
              <div className="flex flex-wrap gap-1 mt-2">
                {college.courses.slice(0, 3).map((course, index) => (
                  <span 
                    key={index} 
                    className="bg-secondary text-xs px-2 py-1 rounded"
                  >
                    {course}
                  </span>
                ))}
                {college.courses.length > 3 && (
                  <span className="bg-secondary text-xs px-2 py-1 rounded">
                    +{college.courses.length - 3} more
                  </span>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CollegeCard;
