import {useDiv, useState} from '../base/Div';
import {RealInputBox} from './real-input-box/RealInputBox';
import {IllusionWrapper, IllusionWrapperType} from './illusion-wrapper/IllusionWrapper';

export const SinInputWrapper = () => {
  const {
    getDiv, setDiv
  } = useDiv();

  const {
    get: getIllusionWrapper,
    set: setIllusionWrapper
  } = useState();

  const onInputChange = () => {
    (getIllusionWrapper() as IllusionWrapperType).update();
  }

  const render = () => {
    setDiv('sin-input-wrapper');

    const  r = RealInputBox( onInputChange );
    getDiv().append(r.render());

    const  s = IllusionWrapper();
    setIllusionWrapper(s);
    getDiv().append(getIllusionWrapper().render());

    return getDiv();
  }

  return {
    render
  }
}
