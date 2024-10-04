import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import Home from './pages/home/Home';
import AboutMe from './pages/about_me/About_me';
import Services from './pages/services/Services';
import Rewiews from './pages/rewiews/Reviews';
import Articles from './pages/articles/Articles';
import Information from './pages/information/Information';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about_me" element={<AboutMe />} />
          <Route path="reviews" element={<Rewiews />} />
          <Route path="services" element={<Services />} />
          <Route path="information" element={<Information />} />
          <Route path="articles" element={<Articles />} />
        </Route>
      </Routes>
    </>
  );
};
