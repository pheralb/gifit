import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

// Custom styles ->
import "@/styles/globals.css";

// Pages ->
import Search from "@/pages/Search";
import Details from "@/pages/Details/index";
import ErrorPage from "@/pages/404/index";

// Layout ->
import { Loader, Layout } from "@/components";

// Context ->
import { GifsContextProvider } from "@/context/GifsContext";

const Home = React.lazy(() => import("@/pages/Home/"));
function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <GifsContextProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="search/:keyword" element={<Search />} />
              <Route path="gif/:id" element={<Details />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </Layout>
        </GifsContextProvider>
        <Toaster position="bottom-center" reverseOrder={false} />
      </Suspense>
    </>
  );
}

export default App;
