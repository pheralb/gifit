import React, { useEffect, Suspense } from "react";
import { Switch, Route, useLocation } from "wouter";
import "App.css";

import Search from "pages/Search";
import Details from "pages/Details/index";
import ErrorPage from "pages/404/index";

import { Header, Footer, Loader } from "components";
import { GifsContextProvider } from "context/GifsContext";
import { Toaster } from "react-hot-toast";

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
      <Suspense fallback={<Loader />}>
        <Header />
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
        <Toaster position="bottom-center" reverseOrder={false} />
      </Suspense>
    </>
  );
}

export default App;
