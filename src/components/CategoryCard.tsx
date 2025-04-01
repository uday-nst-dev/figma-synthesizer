
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
  title: string;
  icon: React.ReactNode;
  count: number;
  isHighlighted?: boolean;
  className?: string;
}

const CategoryCard = ({
  title,
  icon,
  count,
  isHighlighted = false,
  className,
}: CategoryCardProps) => {
  return (
    <div
      className={cn(
        "flex flex-col p-6 rounded-xl transition-transform hover:scale-105",
        isHighlighted
          ? "bg-primary text-white"
          : "bg-white shadow-sm hover:shadow-md text-text",
        className
      )}
    >
      <div className="mb-2">{icon}</div>
      <h3 className="font-bold text-lg mb-1">{title}</h3>
      <p className={cn("text-sm mb-4", !isHighlighted && "text-gray-500")}>
        {count} jobs available
      </p>
      <div className="mt-auto flex items-center text-sm font-medium">
        <span>Explore jobs</span>
        <ArrowRight className="w-4 h-4 ml-1" />
      </div>
    </div>
  );
};

export default CategoryCard;
