import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Spinner from './components/layouts/Spinner';


function App() {

  const Home = lazy(() => import("./components/pages/Home"));
  const Signin = lazy(() => import("./components/pages/auth/Signin"));
  const Signup = lazy(() => import("./components/pages/auth/Signup"));
  const PageNotFound = lazy(() => import("./components/pages/PageNotFound"));


  return (
    <Router>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route exact path="/" element={<Home />} />{/* New Syntax */}
          <Route exact path="/signin" element={<Signin />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
