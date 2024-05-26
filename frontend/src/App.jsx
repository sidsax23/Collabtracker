import React from 'react'
import {Routes, BrowserRouter as Router, Route} from 'react-router-dom' 
import Homepage from './homepage.jsx';
import Repositories from './Components/Repositories.jsx';
import Users from './Components/Users.jsx';

function App() 
{

return (
    <Router>
      <Routes>
		<Route exact path="/" element =
          {
            <Repositories/>
          }
        />
        <Route exact path="/repositories" element =
          {
            <Repositories/>
          }
        />
        <Route exact path="/users" element =
          {
            <Users/>
          }
        />
        <Route exact path="/facts" element =
          {
            <Repositories/>
          }
        />
      </Routes>
    </Router>
);
}

export default App