import React from 'react';
import Navbar from './components/Navbar/Navbar';
import BannerCard from './components/BannerCard/BannerCard'; // Import the BannerCard component
import Footer from './components/Footer/Footer'; // Import the Footer component
import ProjectCard from './components/ProjectCard/ProjectCard'; // Import the ProjectCard component
import './index.css';

function App() {

  return (
    <div className="App ">
      <Navbar />
      <div className="content">
        <BannerCard /> {/* Render the BannerCard component */}
        <main  className="flex flex-wrap justify-between p-10">
          <ProjectCard /> 
          {/* Render the ProjectCard component below BannerCard */}      
          {/* Add more main content here if needed */}
        </main>
      </div>
      <Footer /> {/* Render the Footer component */}
    </div>
  );
}

export default App;
