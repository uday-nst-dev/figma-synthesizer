
import { cn } from "@/lib/utils";

interface JobListItemProps {
  id: string;
  title: string;
  company: string;
  location: string;
  logoSrc: string;
  tags: string[];
  isFullTime: boolean;
  className?: string;
}

const JobListItem = ({
  id,
  title,
  company,
  location,
  logoSrc,
  tags,
  isFullTime,
  className,
}: JobListItemProps) => {
  return (
    <div className={cn("flex bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow", className)}>
      <div className="w-10 h-10 bg-gray-100 rounded-md flex items-center justify-center overflow-hidden mr-3">
        <img src={logoSrc} alt={company} className="w-full h-full object-contain p-1" />
      </div>
      <div className="flex-1">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between">
          <h3 className="font-bold text-sm">{title}</h3>
          <div className="text-xs py-1 px-2 bg-gray-100 text-gray-700 rounded-full font-medium mt-1 sm:mt-0 w-fit">
            {isFullTime ? "Full Time" : "Part Time"}
          </div>
        </div>
        <div className="text-xs text-gray-500 mt-1 mb-2">
          <span>{company}</span>
          <span className="mx-1.5">•</span>
          <span>{location}</span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {tags.slice(0, 2).map((tag, index) => (
            <span 
              key={index} 
              className="text-xs py-0.5 px-1.5 rounded bg-gray-100 text-gray-600"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobListItem;
