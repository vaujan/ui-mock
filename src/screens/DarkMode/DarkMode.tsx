import React from "react";
import { DashboardSection } from "./sections/DashboardSection/DashboardSection";
import { NavigationSection } from "./sections/NavigationSection/NavigationSection";

export const DarkMode = (): JSX.Element => {
  return (
    <main className="flex min-h-screen w-full bg-[#0c0e12] dark">
      <NavigationSection />
      <DashboardSection />
    </main>
  );
};
