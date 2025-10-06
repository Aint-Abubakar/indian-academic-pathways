
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
      <div className="relative h-full rounded-xl border bg-card shadow-sm p-6 card-hover fade-in-element overflow-hidden"
        style={{ borderColor: `var(--${color})` }}>
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-3 icon-bounce"
          style={{ 
            background: `linear-gradient(135deg, var(--${color}-bg) 0%, var(--${color}) 100%)`, 
            color: `white`
          }}>
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="mb-2 text-lg font-semibold group-hover:text-nextstep-blue transition-all duration-300">{title}</h3>
        <p className="text-sm text-muted-foreground transition-colors duration-300 group-hover:text-foreground">{description}</p>
      </div>
    </Link>
  );
};

export default CategoryCard;
