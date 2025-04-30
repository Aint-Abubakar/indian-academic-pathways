
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

interface PageLayoutProps {
  title: string;
  children: React.ReactNode;
}

const PageLayout = ({ title, children }: PageLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="pt-20 pb-4">
        <div className="section-container">
          <h1 className="text-3xl font-bold text-center mb-6">{title}</h1>
        </div>
        <main className="flex-grow">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default PageLayout;
