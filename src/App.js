import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Spinner from './components/layouts/Spinner';
import PrivateRoute from './components/pages/auth/PrivateRoute';

function App() {

  const Home = lazy(() => import("./components/pages/Home"));
  const Signin = lazy(() => import("./components/pages/auth/Signin"));
  const Signup = lazy(() => import("./components/pages/auth/Signup"));
  const UpdateProfile = lazy(() => import("./components/pages/UpdateProfile"));
  const Profile = lazy(() => import("./components/pages/Profile"));

  const CommingSoon = lazy(() => import("./components/pages/CommingSoon"));
  const PageNotFound = lazy(() => import("./components/pages/PageNotFound"));

  

  return (
    <Router>
      <Suspense fallback={<Spinner />}>
        <Switch>
          <PrivateRoute exact path="/" component={Home} />{/* New Syntax */}

          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/update-profile" component={UpdateProfile} />
          <Route exact path="/profile/:userId" component={Profile} />
          <Route exact path="/comming-soon" component={CommingSoon} />
          <Route exact path="*" component={PageNotFound} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
