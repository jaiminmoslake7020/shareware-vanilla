import {useDiv} from '../../base/Div';
import {useSpan} from '../../base/Text';
import {getValidationResult} from '../../../store/store';

export type IllusionInputWrapperType = {
  render: () => HTMLDivElement,
  update: (v: number) => void,
  removeText: (
    previousCharWasLast: boolean
  ) => void,
  removeCursurIsHere: () => void
};

export const IllusionInputWrapper = () : IllusionInputWrapperType => {
  const {
    getDiv, setDiv
  } = useDiv();

  const {
    getDiv: getDiv2, setDiv: setDiv2
  } = useDiv();

  const {
    getSpan, setSpan
  } = useSpan();

  const update = (v: number) => {
    getSpan().innerText = String(v);
    removeCursurIsHere();
    getDiv().classList.add('input-is-filled');
  }

  const removeText = (previousCharWasLast: boolean) => {
    if ( previousCharWasLast ) {
      getDiv().classList.add('cursor-is-here');
    } else {
      removeCursurIsHere();
    }
    getSpan().innerText = '';
    getDiv().classList.remove('input-is-filled');
  }

  const removeCursurIsHere = () => {
    getDiv().classList.remove('cursor-is-here');
  }

  const render = () => {
    setDiv('illusion-input-wrapper');
    getDiv().addEventListener('click', (e) => {
      document.getElementById('ssn')?.focus()
    });
    setSpan('illusion-input-span');
    getDiv().append(getSpan());

    setDiv2('cursor-supporter');
    getDiv().append(getDiv2());

    return getDiv();
  }

  return {
    render,
    update,
    removeText,
    removeCursurIsHere
  }
}
