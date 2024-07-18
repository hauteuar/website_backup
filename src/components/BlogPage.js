// In src/components/BlogPage.js
import { Outlet } from 'react-router-dom';


import React from 'react';
import BlogPostList from './BlogPostList'; // Component for individual blog posts
import FounderMessage from './FounderMessage'; // Component for the founder's message
import CompanyNews from './CompanyNews'; // Component to display company news and tie-ups
import Header from './Header';

function BlogPage() {
  return (
      <div>
          <Outlet /> 
          <div className="Header">
              <Header className="fixed w-full bg-black z-10 ..." />



              <div className="rest-of-the-page">
                  <h1>Latest from Our Blog</h1>
                  <BlogPostList />
      <CompanyNews />
      <FounderMessage />
      {/* Add more components or sections as needed */}
              </div>
          </div>
      </div>
  );
}

export default BlogPage;
