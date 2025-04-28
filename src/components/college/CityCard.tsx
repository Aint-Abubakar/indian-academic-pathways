
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { City } from "@/data/collegeData";
import { cn } from "@/lib/utils";

interface CityCardProps {
  city: City;
}

const CityCard = ({ city }: CityCardProps) => {
  return (
    <Link to={`/colleges/${city.id}`}>
      <Card className="card-hover fade-in-element">
        <CardContent className="p-6">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">{city.name}</h3>
            <p className="text-sm text-muted-foreground">{city.state}</p>
            <div className={cn(
              "inline-flex items-center justify-center px-2.5 py-0.5 rounded-full text-xs font-medium",
              "bg-nextstep-blue/10 text-nextstep-blue"
            )}>
              {city.collegeCount} Colleges
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CityCard;
