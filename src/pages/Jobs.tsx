
import { useState } from "react";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import Footer from "@/components/Footer";
import JobCard from "@/components/JobCard";
import JobListItem from "@/components/JobListItem";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Briefcase, MapPin, Filter, ArrowDownNarrowWide } from "lucide-react";
import { featuredJobs, latestJobs } from "@/data/mockData";

const Jobs = () => {
  const [jobView, setJobView] = useState<"grid" | "list">("grid");
  const allJobs = [...featuredJobs, ...latestJobs];
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      {/* Page Header */}
      <section className="bg-white py-12 border-b">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-text mb-4">Find Your Dream Job</h1>
          <p className="text-gray-600 mb-8 max-w-2xl">
            Browse through thousands of full-time and part-time jobs and get matched with roles that fit your skills and interests.
          </p>
          
          <SearchBar className="max-w-4xl" />
        </div>
      </section>
      
      {/* Job Listings Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="w-full lg:w-1/4 bg-white p-6 rounded-lg shadow-sm h-fit">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-lg">Filters</h3>
                <Button variant="ghost" size="sm" className="text-primary text-xs">Clear all</Button>
              </div>
              
              {/* Job Type Filter */}
              <div className="mb-6">
                <h4 className="font-medium mb-3 text-sm">Job Type</h4>
                <div className="space-y-2">
                  {['Full Time', 'Part Time', 'Remote', 'Contract', 'Internship'].map((type) => (
                    <div key={type} className="flex items-center space-x-2">
                      <Checkbox id={`type-${type}`} />
                      <Label htmlFor={`type-${type}`} className="text-sm font-normal">
                        {type}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Experience Level Filter */}
              <div className="mb-6">
                <h4 className="font-medium mb-3 text-sm">Experience Level</h4>
                <div className="space-y-2">
                  {['Entry Level', 'Mid Level', 'Senior Level', 'Director', 'Executive'].map((level) => (
                    <div key={level} className="flex items-center space-x-2">
                      <Checkbox id={`level-${level}`} />
                      <Label htmlFor={`level-${level}`} className="text-sm font-normal">
                        {level}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Salary Range Filter */}
              <div className="mb-6">
                <h4 className="font-medium mb-3 text-sm">Salary Range</h4>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <Input placeholder="Min" className="text-sm" />
                  </div>
                  <div>
                    <Input placeholder="Max" className="text-sm" />
                  </div>
                </div>
              </div>
              
              {/* Location Filter */}
              <div>
                <h4 className="font-medium mb-3 text-sm">Location</h4>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input placeholder="Location" className="pl-9 text-sm" />
                </div>
              </div>
            </div>
            
            {/* Jobs List */}
            <div className="w-full lg:w-3/4">
              <div className="bg-white p-4 rounded-lg shadow-sm mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <p className="text-gray-500 text-sm">Showing <span className="font-medium text-text">{allJobs.length}</span> jobs</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Filter className="w-4 h-4 text-gray-500" />
                    <span className="text-sm">Sort by:</span>
                    <select className="bg-transparent text-sm font-medium focus:outline-none">
                      <option>Newest</option>
                      <option>Oldest</option>
                      <option>Relevance</option>
                    </select>
                  </div>
                  <div className="flex bg-gray-100 rounded-md">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setJobView("grid")}
                      className={`rounded-l-md rounded-r-none px-2 py-1 ${jobView === "grid" ? "bg-primary text-white" : ""}`}
                    >
                      <ArrowDownNarrowWide className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setJobView("list")}
                      className={`rounded-r-md rounded-l-none px-2 py-1 ${jobView === "list" ? "bg-primary text-white" : ""}`}
                    >
                      <Briefcase className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Job Results */}
              {jobView === "grid" ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {allJobs.slice(0, 9).map((job) => (
                    <JobCard
                      key={job.id}
                      id={job.id}
                      title={job.title}
                      company={job.company}
                      location={job.location}
                      logoSrc={job.logoSrc}
                      salary={'salary' in job ? job.salary : undefined}
                      jobType={'jobType' in job ? job.jobType : ''}
                      tags={job.tags}
                      isFullTime={job.isFullTime}
                    />
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {allJobs.slice(0, 10).map((job) => (
                    <JobListItem
                      key={job.id}
                      id={job.id}
                      title={job.title}
                      company={job.company}
                      location={job.location}
                      logoSrc={job.logoSrc}
                      tags={job.tags}
                      isFullTime={job.isFullTime}
                    />
                  ))}
                </div>
              )}
              
              <div className="mt-8 text-center">
                <Button className="bg-primary hover:bg-primary-dark">
                  Load More Jobs
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Jobs;
