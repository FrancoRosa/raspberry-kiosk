import { Switch, Route } from 'react-router-dom';
import Video from './Video';
import Pdf from './Pdf';
import Figure from './Figure';
import Home from './Home';
import List from './List';

const App = () => {
  return (
    <Switch>
      <Route path="/vid/:id" component={Video} />
      <Route path="/pdf/:id" component={Pdf} />
      <Route path="/fig/:id" component={Figure} />
      <Route path="/vids" component={() => <List category="vid" />} />
      <Route path="/pdfs" component={() => <List category="pdf" />} />
      <Route path="/figs" component={() => <List category="fig" />} />
      <Route path="/" component={Home} />
    </Switch>
  );
}

export default App;
