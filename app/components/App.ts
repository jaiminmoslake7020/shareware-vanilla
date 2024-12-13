import {useDiv, useState} from './base/Div';
import {SinInputWrapper} from './sin-input-wrapper/SinInputWrapper';

export const App = () => {
  const {
    getDiv, setDiv
  } = useDiv();

  const render = () => {
    setDiv('app-wrapper')
    const s = SinInputWrapper();
    getDiv().append( s.render() );
    return getDiv();
  }

  return {
    render
  }
};
