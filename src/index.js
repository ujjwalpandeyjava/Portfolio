import React, { lazy, Suspense, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider, useNavigate } from 'react-router-dom';
import configs from '../package.json';
import { ComponentLoading } from './assets/Loadings';
import ContactMePage from './contact/ContactMePage';
import PDFViewer from './document/PDFViewer';
import Footer from "./footer/Footer";
import './index.scss';
import ConnectView from './navbar/ConnectView';
import Navbar from "./navbar/Navbar";


const Home = lazy(() => import("./home/Home"));
const PageNotFound = lazy(() => import("./pageNotFound/PageNotFound"));
const SkillsProjects = lazy(() => import("./learnings/SkillsProjects"));
const SummaryCard = lazy(() => import("./tiltEffect/summaryTilt"));


const homePath = configs.homepage.substring(configs.homepage.lastIndexOf("/") + 1, configs.homepage.length)


function ToHome() {
  const nav = useNavigate();
  useEffect(() => {
    nav(homePath)
  }, [nav]);
  return <></>
}
function BaseApp() {
  return (
    <>
      <Navbar />
      <ConnectView />
      <div className='sectionBody'>
        <Outlet />
        <Toaster position="bottom-right" />
      </div >
      <Footer />
    </>
  )
}

const routesWithJSX = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<Outlet />}>
      <Route path="" element={<ToHome />} />
      <Route path={homePath} element={<BaseApp />}>
        <Route path="" element={<Suspense fallback={<ComponentLoading />}><Home /></Suspense>} />
        <Route path="skills_projects" element={<Suspense fallback={<ComponentLoading />}><SkillsProjects /></Suspense>} />
        <Route path="contact" element={<Suspense fallback={<ComponentLoading />}><ContactMePage /></Suspense>} />
        <Route path="summary" element={<Suspense fallback={<ComponentLoading />}><SummaryCard /></Suspense>} />
        <Route path="resume" element={<Suspense fallback={<ComponentLoading />}><PDFViewer /></Suspense>} />
      </Route>
      <Route path='*' element={<Suspense fallback={<ComponentLoading />}><PageNotFound /></Suspense>} />
    </Route>
  )
);

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<RouterProvider router={routesWithJSX} />);