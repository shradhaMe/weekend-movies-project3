import './App.css';
import styled from "styled-components";
import { Movies } from "./Movies";
import Footer from "./Footer";
import Header from "./Header";
import MoviesOverview from './MoviesOverview';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="AppWrapper">
      <Header />
      <Routes>
        <Route exact path="/" element={<Movies />} />
        <Route path="/:movieId" element={<MoviesOverview />} />
      </Routes>
      <Footer />
    </div>
  );
}

// const AppWrapper = styled.div`
//   width: 1200px;
//   margin: 0 auto;
// `;

export default App;
