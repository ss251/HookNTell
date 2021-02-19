import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonTabBar, IonTabs, IonTabButton, IonLabel } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home.js';
import About from './pages/About';
import Resources from './pages/Resources'
import Profile from './pages/Profile'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App = () => {
  return (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
      <IonRouterOutlet>
        <Route path="/" render={() => <Redirect to="/home" />} exact={true}/>
        <Route path="/home" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/resources" component={Resources}/>
        <Route path="/profile" component={Profile}/> 
        <Route component = {() => <Redirect to= "/home" />} />
      </IonRouterOutlet>
      <IonTabBar slot="top">
        <IonTabButton tab="home" href="/home">
          <IonLabel>Home</IonLabel>
        </IonTabButton>
        <IonTabButton tab="about" href="/about">
          <IonLabel>About</IonLabel>
        </IonTabButton>
        <IonTabButton tab="resources" href="/resources">
          <IonLabel>Resources</IonLabel>
        </IonTabButton>
        <IonTabButton tab="profile" href="/profile">
          <IonLabel>Profile</IonLabel>
        </IonTabButton>
      </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
  )
};

export default App;
