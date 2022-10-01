import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Events from './components/pages/Events';
import MentorSpotlight from './components/pages/MentorSpotlight/MentorSpotlight';
import CourseWork from './components/pages/CourseWork';
import MenteeStories from './components/pages/MenteeStories/MentorSpotlight';
import MenteeSignup from './components/pages/MenteeSignup';
import MentorSignup from './components/pages/MentorSignup'
import MenteeLogin from './components/pages/MenteeLogin'
import MentorLogin from './components/pages/MentorLogin'
import Login from './components/pages/Login';

import MenteeDashboard from './components/pages/MenteeDashboard';
import MentorDashboard from './components/pages/MentorDashboard';
import Profile from './components/Profile';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/events' component={Events} />
          <Route path='/course-work' component={CourseWork} />
          <Route path='/mentor-spotlight' component={MentorSpotlight} />
          <Route path='/mentee-stories' component={MenteeStories} />
          <Route path='/login' component={Login} />
          <Route path='/mentor-signup' component={MentorSignup} />
          <Route path='/mentor-login' component={MentorLogin} />
          <Route path='/mentee-login' component={MenteeLogin} />
          <Route path='/mentee-signup' component={MenteeSignup} />
          <Route path='/mentee-dashboard' component={MenteeDashboard} />
          <Route path='/mentor-dashboard' component={MentorDashboard} />
          <Route path='/profile' component={Profile} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
