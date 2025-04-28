
import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface CategoryCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
  color: string;
}

const CategoryCard = ({ title, description, icon: Icon, link, color }: CategoryCardProps) => {
  return (
    <Link to={link} className="group block">
      <div className={cn(
        "rounded-xl border bg-card p-6 card-hover fade-in-element", 
        `hover:border-${color}`
      )}>
        <div className={cn(
          "mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg",
          `bg-${color}/10 text-${color}`
        )}>
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="mb-2 text-lg font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </Link>
  );
};

export default CategoryCard;
