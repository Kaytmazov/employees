import AppHeader from '../AppHeader';
import { ReactComponent as SvgSprite } from '../../images/sprite.svg';

import Employees from '../Employees';

import './App.scss';

const App = () => (
  <>
    <div className="app">
      <AppHeader />
      <main className="app-content">
        <Employees/>
      </main>
    </div>
    <SvgSprite className="d-none" />
  </>
);

export default App;
