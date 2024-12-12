import {useDiv} from './base/Div';

export const App = () => {
  const {
    getDiv, setDiv
  } = useDiv();

  const render = () => {
    setDiv('app-wrapper')
    return getDiv();
  }

  return {
    render
  }
};
