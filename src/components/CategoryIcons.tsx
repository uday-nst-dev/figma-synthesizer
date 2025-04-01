
import { PenTool, BarChart2, PieChart, DollarSign, Code, Cpu, Briefcase, Users } from "lucide-react";

export const getCategoryIcon = (iconName: string) => {
  const iconProps = { className: "w-6 h-6", strokeWidth: 1.5 };
  
  switch (iconName.toLowerCase()) {
    case "design":
      return <PenTool {...iconProps} />;
    case "sales":
      return <BarChart2 {...iconProps} />;
    case "marketing":
      return <PieChart {...iconProps} />;
    case "finance":
      return <DollarSign {...iconProps} />;
    case "technology":
      return <Code {...iconProps} />;
    case "engineering":
      return <Cpu {...iconProps} />;
    case "business":
      return <Briefcase {...iconProps} />;
    case "hr":
      return <Users {...iconProps} />;
    default:
      return <Briefcase {...iconProps} />;
  }
};
