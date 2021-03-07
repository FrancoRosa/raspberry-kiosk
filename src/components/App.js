import { Switch, Route } from 'react-router-dom';
import Video from './Video';
import Pdf from './Pdf';
import Figure from './Figure';
import H5PContainer from './H5PContainer';
import Home from './Home';
import List from './List';
import BatteryStatus from './BatteryStatus';

const App = () => {
  return (
    <div>
      <BatteryStatus />
      <Switch>
        <Route path="/vid/:id" component={Video} />
        <Route path="/pdf/:id" component={Pdf} />
        <Route path="/fig/:id" component={Figure} />
        <Route path="/h5p/:id" component={H5PContainer} />
        <Route path="/vids" component={() => <List category="vid" />} />
        <Route path="/pdfs" component={() => <List category="pdf" />} />
        <Route path="/figs" component={() => <List category="fig" />} />
        <Route path="/h5ps" component={() => <List category="h5p" />} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
