
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
  // Using inline style for dynamic color properties instead of Tailwind classes
  return (
    <Link to={link} className="group block">
      <div className="rounded-xl border bg-gradient-to-br from-nextstep-green/20 to-nextstep-teal/20 p-6 card-hover fade-in-element"
        style={{ borderColor: `var(--${color})` }}>
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg"
          style={{ 
            backgroundColor: `var(--${color}-bg)`, 
            color: `var(--${color})` 
          }}>
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="mb-2 text-lg font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </Link>
  );
};

export default CategoryCard;
