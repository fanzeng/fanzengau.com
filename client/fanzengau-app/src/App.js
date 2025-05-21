import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

import './css/fanzeng.css';
import './css/fanzengau.css';
import './css/share_on_social_media.css';
import './vendor/fontawesome/css/fontawesome.min.css';
import './vendor/fontawesome/css/brands.min.css';
import { Portfolio } from './portfolio/Portfolio';
import { Header } from './header/Header';
import { Footer } from './footer/Footer';
import { SideColumnLeft } from './side-column-left/SideColumnLeft';
import { SideColumnRight } from './side-column-right/SideColumnRight';
import { Myblog } from './myblog/myblogApp/myblog';

// Dynamically import all JSX files from the myblog/content directory
const importBlogComponents = (requireContext) => {
  return requireContext.keys().map((key) => {
    const Component = requireContext(key).default;
    const path = `/myblog/content${key.replace('./', '').replace('.jsx', '')}`;
    return { path, Component };
  });
};

const blogRoutes = importBlogComponents(
  require.context('./myblog/content', true, /\.jsx$/) // Only include JSX files
);

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const setThemeCss = (isDark) => {
      console.log('isDark =', isDark);
      const id = 'theme-css';
      let link = document.getElementById(id);
      if (!link) {
        link = document.createElement('link');
        link.rel = 'stylesheet';
        link.id = id;
        document.head.appendChild(link);
      }
      link.href = isDark
        ? '/css/atelier-dune-dark.min.css'
        : '/css/atelier-dune-light.min.css';
    };

    const handleChange = (e) => {
      console.log('isDarkMode =', e.matches);
      setIsDarkMode(e.matches);
      setThemeCss(e.matches);
    };

    // Initial check and setup
    setIsDarkMode(darkModeMediaQuery.matches);
    setThemeCss(darkModeMediaQuery.matches);

    darkModeMediaQuery.addEventListener('change', handleChange);

    return () => {
      darkModeMediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  const wakeServer = async (url, payload = null) => {
    try {
      const options = {
        method: payload ? 'POST' : 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Origin': 'https://fanzengau.com',
        },
      };

      if (payload) {
        options.body = JSON.stringify(payload);
      }

      const response = await fetch(url, options);

      if (!response.ok) {
        console.error(`Failed to wake the server at ${url}:`, response.statusText);
      } else {
        console.log(`Server at ${url} woke successfully:`, await response.json());
      }
    } catch (error) {
      console.error(`Error waking the server at ${url}:`, error);
    }
  };

  useEffect(() => {
    const serversToWake = [
      {
        url: 'https://novelgo-app.onrender.com/games',
        payload: {
          Settings: {
            BoardWidth: 5,
            BoardHeight: 5,
            CyclicLogic: true,
            GameMode: 'ComputerOpponent',
          },
          Gameplay: {},
        },
      },
      {
        url: 'https://holdem-app.onrender.com/new-game',
        payload: {},
      },
      {
        url: 'https://multimedia-toolbox-server.onrender.com/video-recipes',
        payload: {},
      },
    ];

    serversToWake.forEach(({ url, payload }) => wakeServer(url, payload));
  }, []);

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <BrowserRouter>
        <header className="App-header">
          <Header />
        </header>
        <SideColumnLeft />

        <div className="column_uneven_2_6_3_center full-width-if-mobile">
          <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="/myblog" element={
              <div className='myblog main_content'>
                <h1>My blogs</h1>
                <Myblog />
              </div>
            } />
            {blogRoutes.map(({ path, Component }, index) => (
              <Route key={index} path={path} element={<Component />} />
            ))}
          </Routes>
          <Footer />
        </div>
        <SideColumnRight />
      </BrowserRouter>
    </div>
  );
}

export default App;
