
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  className?: string;
}

const SearchBar = ({ className }: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic
    console.log("Searching for:", query, "in", location);
  };

  return (
    <form 
      onSubmit={handleSearch} 
      className={cn(
        "flex flex-col md:flex-row items-stretch md:items-center bg-white rounded-lg shadow-md p-1",
        className
      )}
    >
      <div className="flex items-center flex-1 px-3 border-b md:border-b-0 md:border-r border-gray-200 py-2">
        <Search className="w-5 h-5 text-gray-400 mr-2" />
        <Input
          type="text"
          placeholder="Job title or keyword"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border-none shadow-none focus-visible:ring-0 text-sm flex-1 p-0 h-auto"
        />
      </div>
      <div className="flex items-center flex-1 px-3 py-2">
        <MapPin className="w-5 h-5 text-gray-400 mr-2" />
        <Input
          type="text"
          placeholder="Location, Italy"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border-none shadow-none focus-visible:ring-0 text-sm flex-1 p-0 h-auto"
        />
      </div>
      <Button 
        type="submit" 
        className="bg-primary hover:bg-primary-dark text-white md:w-auto w-full mt-2 md:mt-0 md:ml-2"
      >
        Search my job
      </Button>
    </form>
  );
};

export default SearchBar;
