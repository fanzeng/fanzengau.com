import { useContext, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import { MathJaxContext, MathJax } from 'better-react-mathjax'

import './css/fanzeng.css'
import './css/fanzengau.css'
import './css/fanzengau.css'
import './css/share_on_social_media.css'
import './css/atelier-dune-light.css'
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
  return (
    <div className="App">
      <BrowserRouter>

        <header className="App-header">
          <Header />
        </header>
        <SideColumnLeft />

        <div className='column_uneven_2_6_3_center'>
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
