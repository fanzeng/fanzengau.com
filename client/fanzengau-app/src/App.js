import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'

import './css/fanzeng.css'
import './css/fanzengau.css'
import './css/fanzengau.css'
import './css/share_on_social_media.css'
import './vendor/fontawesome/css/fontawesome.min.css'
import './vendor/fontawesome/css/brands.min.css'
import { Portfolio } from './portfolio/Portfolio'
import { Header } from './header/Header';
import { Footer } from './footer/Footer';
import { SideColumnLeft } from './side-column-left/SideColumnLeft'
import { SideColumnRight } from './side-column-right/SideColumnRight'
import { AvoidRsyncDisaster } from './myblog/content/linux/avoid_rsync_disaster/avoid_rsync_disaster'
import { LinuxCheatSheet } from './myblog/content/linux/linux_cheat_sheet/linux_cheat_sheet';
import { ComputeNormalDistributionFromScratchByIntegration } from './myblog/content/statistics/compute_normal_distribution_from_scratch_by_integration/compute_normal_distribution_from_scratch_by_integration';
import { LinearRegressionAndPearsonCorrelationCoefficient } from './myblog/content/statistics/linear_regression_and_pearson_correlation_coefficient/linear_regression_and_pearson_correlation_coefficient'
import { GradientOfCategoricalCrossEntropy } from './myblog/content/machine_learning/gradient_of_categorical_cross_entropy/gradient_of_categorical_cross_entropy'
import { Myblog } from './myblog/myblogApp/myblog';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    if (darkModeMediaQuery.matches) {
      import ('./css/atelier-dune-dark.min.css');
    } else {
      import ('./css/atelier-dune-light.min.css');
    }
    const handleChange = (e) => {
      setIsDarkMode(e.matches);
    };
    darkModeMediaQuery.addEventListener('change', handleChange);
    return () => {
      darkModeMediaQuery.removeEventListener('change', handleChange);
    };
  }, [isDarkMode]);

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
    <div className="App">
      <BrowserRouter>

        <header className="App-header">
          <Header />
        </header>
        <SideColumnLeft />

        <div className='column_uneven_2_6_3_center full-width-if-mobile'>
          <Routes>
            <Route path='/' element={<Portfolio />}></Route>
            <Route path='/myblog' element={<Myblog />}></Route>
            <Route path='/myblog/content/linux/avoid_rsync_disaster/avoid_rsync_disaster' element={<AvoidRsyncDisaster />}></Route>
            <Route path='/myblog/content/linux/linux_cheat_sheet/linux_cheat_sheet' element={<LinuxCheatSheet />}></Route>
            <Route path='/myblog/content/statistics/compute_normal_distribution_from_scratch_by_integration/compute_normal_distribution_from_scratch_by_integration' element={<ComputeNormalDistributionFromScratchByIntegration />}></Route>
            <Route path='/myblog/content/statistics/linear_regression_and_pearson_correlation_coefficient/linear_regression_and_pearson_correlation_coefficient' element={<LinearRegressionAndPearsonCorrelationCoefficient />}></Route>
            <Route path='/myblog/content/machine_learning/gradient_of_categorical_cross_entropy/gradient_of_categorical_cross_entropy' element={<GradientOfCategoricalCrossEntropy />}></Route>
          </Routes>
          <Footer />
        </div>
        <SideColumnRight />
      </BrowserRouter>
    </div>
  );
}

export default App;
