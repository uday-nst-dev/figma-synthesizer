
import { cn } from "@/lib/utils";

interface JobCardProps {
  id: string;
  title: string;
  company: string;
  location: string;
  logoSrc: string;
  salary?: string;
  jobType: string;
  tags: string[];
  isFullTime: boolean;
  className?: string;
}

const JobCard = ({
  id,
  title,
  company,
  location,
  logoSrc,
  salary,
  jobType,
  tags,
  isFullTime,
  className,
}: JobCardProps) => {
  return (
    <div className={cn("bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-5", className)}>
      <div className="flex items-start">
        <div className="w-12 h-12 bg-gray-100 rounded-md flex items-center justify-center overflow-hidden mr-4">
          <img src={logoSrc} alt={company} className="w-full h-full object-contain p-1" />
        </div>
        <div className="flex-1">
          <div className="flex justify-between">
            <h3 className="font-bold text-base">{title}</h3>
            <div className="bg-gray-100 text-gray-700 text-xs font-medium rounded-full px-2 py-1 whitespace-nowrap">
              {isFullTime ? "Full Time" : "Part Time"}
            </div>
          </div>
          <div className="text-gray-500 text-sm mt-1 flex items-center">
            <span>{company}</span>
            <span className="mx-1.5">•</span>
            <span>{location}</span>
          </div>
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-3">
              {jobType}
            </p>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="text-xs font-medium py-1 px-2 rounded bg-gray-100 text-gray-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
