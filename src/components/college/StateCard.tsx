
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { State } from "@/data/collegeData";
import { cn } from "@/lib/utils";

interface StateCardProps {
  state: State;
}

const StateCard = ({ state }: StateCardProps) => {
  return (
    <Link to={`/top-colleges/${state.id}`}>
      <Card className="card-hover fade-in-element">
        <CardContent className="p-6">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">{state.name}</h3>
            <div className={cn(
              "inline-flex items-center justify-center px-2.5 py-0.5 rounded-full text-xs font-medium",
              "bg-nextstep-blue/10 text-nextstep-blue"
            )}>
              {state.collegeCount} Colleges
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default StateCard;
