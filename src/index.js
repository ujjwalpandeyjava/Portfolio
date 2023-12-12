import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import configs from '../package.json';
import BlogHome from './blog/BlogHome';
import Blog from './blog/Blogs/Blog';
import ContactMePage from './contact/ContactMePage.js';
import ExperiencePage from './educationExperience/ExperiencePage.js';
import Error from './error/Error';
import Home from './home/Home';
import './index.css';
import Navbar from './navbar/Navbar';
import PageNotFound from './pageNotFound/PageNotFound';
import SkillsProjects from './skills/SkillsProjects.js';
import BackEndProjects from './skills/projectsByCategory/BackEndProjects.js';
import FrontEndProjects from './skills/projectsByCategory/FrontEndProjects.js';
import FullStackProjects from './skills/projectsByCategory/FullStackProjects.js';
// import Footer from './footer/Footer.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter basename={configs.homepage.substring(configs.homepage.lastIndexOf("/") + 1, configs.homepage.length)} >
      <Navbar />
      <div className='sectionBody'>
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/experience" element={<ExperiencePage />} />{/* education and work experience */}
          <Route path="/skills_projects" element={<SkillsProjects />} /> {/* skills and projects  */}
          <Route path="/skills_projects/frontEndsProjects" element={<FrontEndProjects />} />
          <Route path="/skills_projects/backEndProjects" element={<BackEndProjects />} />
          <Route path="/skills_projects/fullStackProjects" element={<FullStackProjects />} />
          <Route path="/blog" element={<BlogHome />} />
          <Route path="/blog/:blogId" element={<Blog />} />
          <Route path="/contact" element={<ContactMePage />} />
          <Route path="/error" element={<Error />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
        <Toaster position="bottom-right" />
      </div>
      {/* <Footer /> */}
    </BrowserRouter>
    <BrowserRouter basename='app2'>
      <Routes>
        <Route path="" element={<h2>App 2</h2>} />
        <Route path="/*" element={<h1>Page not found</h1>} />
      </Routes>
      <Toaster position="top-right" />
    </BrowserRouter>
  </>
);