
import { useState } from "react";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import CategoryCard from "@/components/CategoryCard";
import { getCategoryIcon } from "@/components/CategoryIcons";
import SectionHeader from "@/components/SectionHeader";
import JobCard from "@/components/JobCard";
import JobListItem from "@/components/JobListItem";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { categories, companyLogos, featuredJobs, latestJobs } from "@/data/mockData";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-white py-16 md:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-text mb-4">
              Discover<br />
              more than<br />
              <span className="text-secondary">5000+ Jobs</span>
            </h1>
            <p className="text-gray-600 mb-8 max-w-lg">
              Great platform for the job seeker that searching for
              new career heights and passionate about startups.
            </p>
            
            <SearchBar className="max-w-2xl" />
            
            <div className="mt-6 text-sm text-gray-500">
              <span>Popular: </span>
              <span className="space-x-2">
                <a href="#" className="text-gray-900 font-medium hover:text-primary">UI Designer,</a>
                <a href="#" className="text-gray-900 font-medium hover:text-primary">UX Researcher,</a>
                <a href="#" className="text-gray-900 font-medium hover:text-primary">Android,</a>
                <a href="#" className="text-gray-900 font-medium hover:text-primary">Admin</a>
              </span>
            </div>
          </div>
          <div className="w-full lg:w-1/2 mt-12 lg:mt-0 relative">
            <div className="relative z-10 flex justify-center lg:justify-end">
              <img 
                src="/lovable-uploads/db79e94f-77db-4aab-9c72-a03bfb308e48.png" 
                alt="Professional looking for jobs" 
                className="rounded-lg shadow-lg max-w-full h-auto"
                style={{ maxHeight: "500px", objectFit: "contain" }}
              />
            </div>
            <div className="absolute top-0 right-0 w-full h-full">
              <svg width="100%" height="100%" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f3f4f6" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#e5e7eb" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
                <path d="M50,250 Q150,50 250,150 Q350,250 450,150 L450,450 L50,450 Z" fill="url(#grad)" />
              </svg>
            </div>
          </div>
        </div>
      </section>
      
      {/* Companies Section */}
      <section className="py-10 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-500 text-sm mb-6">Companies we helped to find talents</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {companyLogos.map((company) => (
              <div key={company.id} className="grayscale hover:grayscale-0 transition-all">
                <img src={company.logo} alt={company.name} className="h-6 md:h-8 w-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Explore by category" 
            actionText="View all jobs" 
            actionLink="/jobs"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                title={category.title}
                icon={getCategoryIcon(category.icon)}
                count={category.count}
                isHighlighted={category.isHighlighted}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Job Posting CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Start posting<br />jobs today
              </h2>
              <p className="text-white/80 mb-8 max-w-md">
                Start posting jobs for only $10.
              </p>
              <Button className="bg-white text-primary hover:bg-gray-100 font-medium px-8">
                Sign Up For Free
              </Button>
            </div>
            <div className="w-full lg:w-1/2">
              <img 
                src="/placeholder.svg" 
                alt="Dashboard" 
                className="rounded-lg shadow-xl max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Jobs Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Featured jobs" 
            actionText="View all jobs" 
            actionLink="/jobs"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredJobs.slice(0, 8).map((job) => (
              <JobCard
                key={job.id}
                id={job.id}
                title={job.title}
                company={job.company}
                location={job.location}
                logoSrc={job.logoSrc}
                salary={job.salary}
                jobType={job.jobType}
                tags={job.tags}
                isFullTime={job.isFullTime}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Latest Jobs Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Latest jobs open" 
            actionText="View all jobs" 
            actionLink="/jobs"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {latestJobs.map((job) => (
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
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
