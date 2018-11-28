import React, { lazy, Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Loader from './components/Loader';
import { Header } from './components/Header';

const Page = lazy(() => import('./components/Page'));
const Products = lazy(() => import('./components/Products/'));
function App() {
  return (
    <>
      <Header />
      <div id="content">
        <Router>
          <Suspense fallback={<Loader />}>
            <Route path="/" exact component={Products}/>
            <Route path="/product/:id" exact component={Page}/>
          </Suspense>  
        </Router>
      </div>
    </>
  );
}

export default App;
