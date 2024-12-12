import './css/style.scss';
import {
  App
} from './components/App';
import {Div} from './components/base/Div';

window.addEventListener('load', () => {
  const rootEl = Div('root-div');
  rootEl.setAttribute('id','root');
  document.body.appendChild(rootEl);

  const app = App();
  rootEl.appendChild(  app.render() );
});
