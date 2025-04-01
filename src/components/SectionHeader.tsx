
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface SectionHeaderProps {
  title: string;
  actionLink?: string;
  actionText?: string;
  className?: string;
}

const SectionHeader = ({
  title,
  actionLink = "#",
  actionText = "View all jobs",
  className,
}: SectionHeaderProps) => {
  return (
    <div className={cn("flex justify-between items-center mb-8", className)}>
      <h2 className="text-2xl md:text-3xl font-bold text-text">{title}</h2>
      {actionText && (
        <Link
          to={actionLink}
          className="text-sm text-primary font-medium flex items-center hover:underline"
        >
          {actionText}
          <ArrowRight className="ml-1 w-4 h-4" />
        </Link>
      )}
    </div>
  );
};

export default SectionHeader;
