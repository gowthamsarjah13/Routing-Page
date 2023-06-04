
import './App.css';
import { Route, Switch, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import LandingMainPage from './components/landingpage';
import DashboardPage from './components/dashboardpage';
import ButtonPageRender from './components/button.js';
import Cardpage from './components/cards';
import LoginPageRender from './components/loginpage';
import FournotfourPage from './components/404page';
import BlankPage from './components/blankpage';
import Tablepage from './components/table';


function App() {

  

  return (
    <div className="App">
       
       <Switch>
           <Route exact path="/">
              <LandingMainPage 
                 Children={<DashboardPage/>}
              />
           </Route>

           <Route path="/dashboard">
              <LandingMainPage 
                 Children={<DashboardPage/>}
               />
           </Route>

           <Route path="/buttons">
              <LandingMainPage
                Children={<ButtonPageRender/>}
              />
           </Route>

           <Route path="/cards">
              <LandingMainPage
                Children={<Cardpage/>}
              />
           </Route>

           <Route path="/logins">
              <LoginPageRender/>
           </Route>

           <Route path="/fournotfour">
              <LandingMainPage
                 Children={<FournotfourPage/>}
              />
           </Route>

           <Route path="/blankpage">
              <LandingMainPage
                 Children={<BlankPage/>}
              />
           </Route>

           <Route path="/tablepage">
              <LandingMainPage
                 Children={<Tablepage/>}
              />
           </Route>

           <Route path="**">
              <h1>404 Page Not Found</h1>
           </Route>

       </Switch>
    </div>
  );
}

export default App;
