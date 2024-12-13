import {useState} from '../components/base/Div';
import {validateSSN} from '../business-logic/ssn';

export type InputStoreStateType = {
  get: () => any,
  set: (item: any) => void,
  remove: () => any,
  getValidationResult: () => null | boolean
};

export const InputStoreManager = () : InputStoreStateType  => {
  const {
    get, set, remove
  } = useState();

  let validationResult : null | boolean = null ;

  const getValidationResult = () => {
    return validationResult;
  }

  const setValue = (v: string) => {
    if (String(v).length === 9) {
      validationResult = validateSSN(v);
    } else {
      validationResult = null ;
    }
    set(v);
  }


  return {
    get,
    set: setValue,
    remove,
    getValidationResult
  };
}

export const {
  get: getInputValue,
  set: setInputValue,
  getValidationResult
} = InputStoreManager();


