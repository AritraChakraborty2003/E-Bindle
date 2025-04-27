/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { createContext, useContext, useState, useEffect } from "react";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL_TEST;

interface DataContextType {
  projects: any[] | null;
  testimonials: any[] | null;
  services: any[] | null;
  isLoading: boolean;
}

const DataContext = createContext<DataContextType>({
  projects: null,
  testimonials: null,
  services: null,
  isLoading: true,
});

export function DataProvider({ children }: { children: React.ReactNode }) {
  const [projects, setProjects] = useState<any[] | null>(null);
  const [testimonials, setTestimonials] = useState<any[] | null>(null);
  const [services, setServices] = useState<any[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [projectsRes, testimonialsRes, servicesRes] = await Promise.all([
          fetch(`${API_BASE_URL}api/v1/projects`),
          fetch(`${API_BASE_URL}api/v1/testimonials`),
          fetch(`${API_BASE_URL}api/v1/services`),
        ]);

        const projectsData = await projectsRes.json();
        const testimonialsData = await testimonialsRes.json();
        const servicesData = await servicesRes.json();

        setProjects(projectsData);
        setTestimonials(testimonialsData);
        setServices(servicesData);

        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <DataContext.Provider
      value={{ projects, testimonials, services, isLoading }}
    >
      {children}
    </DataContext.Provider>
  );
}

// Custom hook to use the data easily
export function useData() {
  return useContext(DataContext);
}
