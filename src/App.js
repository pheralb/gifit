import React from "react";
import { Switch, Route } from "wouter";
import "./App.scss";
import "@fontsource/roboto/400.css";

import Search from "./pages/Search";
import Home from "./pages/Home/index";
import Details from "./pages/Details/index";
import ErrorPage from "./pages/404/index";

import Header from "./components/Global/Header";
import Footer from './components/Global/Footer';

import StaticContext from "./context/StaticContext";
import { GifsContextProvider } from "./context/GifsContext";
import TrendingSearches from "components/Trending";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  duration: 500,
});
function App() {
  return (
    <>
      <StaticContext.Provider value={{ name: "gifit" }}>
        <Header />
        <TrendingSearches />
        <GifsContextProvider>
          <Switch>
            <Route component={Home} path="/" />
            <Route component={Home} path="/home" />
            <Route component={Search} path="/search/:keyword/:rating?" />
            <Route component={Details} path="/gif/:id" />
            <Route component={ErrorPage} path="/:rest*" />
          </Switch>
        </GifsContextProvider>
        <Footer />
      </StaticContext.Provider>
    </>
  );
}

export default App;
