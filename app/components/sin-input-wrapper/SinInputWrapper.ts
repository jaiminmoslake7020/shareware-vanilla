import {useDiv, useState} from '../base/Div';
import {RealInputBox} from './real-input-box/RealInputBox';
import {IllusionWrapper, IllusionWrapperType} from './illusion-wrapper/IllusionWrapper';
import {Label} from '../base/Input';
import {Notes} from './notes/Notes';

export type SinInputWrapperType = {
  render: () => HTMLDivElement
};

export const SinInputWrapper = () : SinInputWrapperType => {
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

    getDiv().append(Label('Please insert SSN','font-semibold'));

    const  s = IllusionWrapper();
    setIllusionWrapper(s);
    getDiv().append(getIllusionWrapper().render());

    getDiv().append((Notes()).render())

    return getDiv();
  }

  return {
    render
  }
}
