import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { Suspense } from "react";


const Header = React.lazy(() => import('./components/Header'));
const Home = React.lazy(() => import('./components/Home'));
const Personaje = React.lazy(() => import('./components/Personaje'));
const About = React.lazy(() => import('./components/About'));
const Contact = React.lazy(() => import('./components/Contact'));

function App() {
  return (
    <div className="App flex-col flex">
      <Router>
        <Header/>
        <Suspense fallback={<h1>  cargando ...</h1>}>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/personaje/:id" element={<Personaje/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
