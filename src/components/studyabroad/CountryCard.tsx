
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Country } from "@/data/studyAbroadData";
import { Globe } from "lucide-react";

interface CountryCardProps {
  country: Country;
}

const CountryCard = ({ country }: CountryCardProps) => {
  return (
    <Link to={`/study-abroad/${country.id}`} className="block">
      <Card className="card-hover fade-in-element h-full">
        <CardContent className="p-0">
          <div className="relative">
            <div 
              className="h-40 w-full bg-secondary/50 bg-cover bg-center rounded-t-lg"
              style={{ 
                backgroundImage: country.flagUrl 
                  ? `url(${country.flagUrl})` 
                  : "url('/placeholder.svg')"
              }}
            />
            <div className="p-5 space-y-3">
              <div className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-nextstep-blue" />
                <h3 className="text-lg font-semibold">{country.name}</h3>
              </div>
              <p className="text-sm text-muted-foreground line-clamp-3">{country.description}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CountryCard;
