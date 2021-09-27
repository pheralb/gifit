import React, { useEffect, Suspense } from "react";
import { Switch, Route, useLocation } from "wouter";
import "App.scss";

import Search from "pages/Search";

import Details from "pages/Details/index";
import ErrorPage from "pages/404/index";

import Header from "components/Global/Header";
import Footer from "components/Global/Footer";
import TrendingSearches from "components/Trending";
import Spinner from "components/Spinner/loader";

import { GifsContextProvider } from "context/GifsContext";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const Home = React.lazy(() => import("pages/Home/"));

function App() {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Header />
        <TrendingSearches />
        <GifsContextProvider>
          <ScrollToTop />
          <Switch>
            <Route component={Home} path="/" />
            <Route component={Home} path="/home" />
            <Route component={Search} path="/search/:keyword/:rating?" />
            <Route component={Details} path="/gif/:id" />
            <Route component={ErrorPage} path="/:rest*" />
          </Switch>
        </GifsContextProvider>
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
