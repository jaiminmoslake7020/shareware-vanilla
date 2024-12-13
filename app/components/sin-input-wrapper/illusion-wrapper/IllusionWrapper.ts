import {useDiv} from '../../base/Div';
import {getInputValue, getValidationResult} from '../../../store/store';
import {IllusionInputWrapper, IllusionInputWrapperType} from './IllusionInputWrapper';

export type IllusionWrapperType = {
  render: () => HTMLDivElement,
  update: () =>  void
};

export const IllusionWrapper = () : IllusionWrapperType => {
  const {
    getDiv, setDiv
  } = useDiv();

  const arrayIllusionInputs = [] as IllusionInputWrapperType[];

  const update = () => {
    const stringArray = getInputValue() ? String( getInputValue() ).split("") : [];
    let previousCharWasLast = true;
    arrayIllusionInputs.forEach((item: IllusionInputWrapperType, index: number) => {
      if (typeof stringArray[index] !== "undefined") {
        arrayIllusionInputs[index].update(Number(stringArray[index]));
      } else {
        arrayIllusionInputs[index].removeText(previousCharWasLast);
        previousCharWasLast = false;
      }
    });

    if (typeof getValidationResult() === "boolean") {
      getDiv().classList.add('results-available');
      getDiv().classList.remove(`validation-${!getValidationResult() ? 'success' : 'error'}`);
      getDiv().classList.add(`validation-${getValidationResult() ? 'success' : 'error'}`);
    } else {
      getDiv().classList.remove('results-available');
    }
  }

  const handleDocumentClick = () => {
    document.addEventListener('click', e => {
      const clList = (e.target as HTMLElement)?.classList;
      if (
        clList.contains('illusion-input-wrapper') ||
        clList.contains('illusion-input-span')
      ) {
        update();
      } else {
        arrayIllusionInputs.forEach((item: IllusionInputWrapperType, index: number) => {
          arrayIllusionInputs[index].removeCursurIsHere();
        });
      }
    });
  }

  const render = () => {
    setDiv('illusion-wrapper');

    for (let i = 0 ; i < 9 ; i++) {
      const iDiv = IllusionInputWrapper();
      getDiv().append(iDiv.render());
      if (i === 0) {
        iDiv.removeText(true);
      }
      arrayIllusionInputs.push(iDiv);
    }
    handleDocumentClick();

    return getDiv();
  }

  return {
    render,
    update
  }
}
