import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom' ; 
import LoginPage from './pages/LoginPage' ; 
import HomePage from './pages/HomePage' ;
import DashBoardPage from './pages/DashBoardPage' ;
import ListItemDetail from './functional/ListItemDetail';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <div>
            <Route path="/" component={HomePage }/>
            <Route exact path="/login" component={LoginPage }  />
            <Route exact path="/dashboard" component={DashBoardPage }  />
            <Route exact path={`/dashboard/items/:id`} component={ListItemDetail }  />
          </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
