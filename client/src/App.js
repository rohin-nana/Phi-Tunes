import './App.css';
import HomeDisplay from './HomeDisplay';
import ControlDisplay from './ControlDisplay';
import SubmittedDisplay from './SubmittedDisplay';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  // Link,
  // Redirect
}   from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
              <Route path='/' component={HomeDisplay} exact={true}/>
              <Route path='/home' component={HomeDisplay}/>
              <Route path='/submitted' component={SubmittedDisplay}/>
              <Route path='/rohinisthegoat' component={ControlDisplay}/>
              {/* <Route component={Page404}/> */}
          </Switch>
      </Router>
    </div>
  );
}

export default App;