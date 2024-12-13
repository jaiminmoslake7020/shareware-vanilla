import {useDiv} from '../../base/Div';
import {useTextInput} from '../../base/Input';
import {getInputValue, setInputValue} from '../../../store/store';

export type RealInputBoxType = {
  render: () => HTMLDivElement
}

export const RealInputBox = (
  onInputChange: () => void
) : RealInputBoxType => {
  const {
    getDiv, setDiv
  } = useDiv();

  const {
    getInput, setInput
  } = useTextInput();

  const onChange = (e:any) => {
    let value = e.target.value;
    if (typeof value === "string") {
      setInputValue( value );
      onInputChange();
    }
  }

  const onKeydown =  (event:any) => {
    // Block 'e', 'E', and other keys not needed for numbers
    if (event.key === "e" || event.key === "E" || event.key === "+" || event.key === "-") {
      event.preventDefault();
    } else if (
      !(
        event.key === "Backspace" || event.key === "Delete"
      ) &&
        getInputValue() && getInputValue().length === 9
    ) {
        event.preventDefault();
    }
  }

  const render = () => {
    setDiv('real-input-box');

    setInput('ssn', '', 'ssn', 'ssn-input-field');
    getInput().setAttribute('type','number');
    getInput().setAttribute('autofocus','true');
    getInput().addEventListener('input', onChange);
    getInput().addEventListener('keydown', onKeydown);

    getDiv().append(getInput());

    return getDiv();
  }

  return {
    render
  }
}
