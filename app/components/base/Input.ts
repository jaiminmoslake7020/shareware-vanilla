import {applyClassList, createEL} from '../../utils';

export const Input = (name: string, value: string, id: string, classList?: string) : HTMLInputElement => {
  let input = createEL('input') as HTMLInputElement;
  if (classList) {
    input = applyClassList(input, classList);
  }
  input.setAttribute('name', name);
  input.setAttribute('value', value);
  input.setAttribute('id', id);
  return input;
}

export const Label = (text: string, classList?: string) : HTMLLabelElement => {
  let label = createEL('label') as HTMLLabelElement;
  if (classList) {
    label = applyClassList(label, classList);
  }
  label.textContent = text;
  return label;
}

export const TextInput = (name: string, value: string, id: string, classList?: string) : HTMLInputElement => {
  const input = Input(name, value, id, classList);
  input.setAttribute('type', 'text');
  return input;
}


export type useTextInputType = {
  getInput: () => HTMLInputElement,
  setInput: (name: string, value: string, id: string, classList?: string) => void,
  removeInput: () => void
};

export const useTextInput = () : useTextInputType => {
  let input : undefined | HTMLInputElement;

  const getInput = () => {
    return input as HTMLInputElement;
  }

  const setInput = (name: string, value: string, id: string, classList?: string) => {
    input = TextInput(name, value, id, classList);
  }

  const removeInput = () => {
    if (getInput()) {
      (getInput() as HTMLButtonElement).remove()
    }
    input = undefined
  }

  return {
    getInput,
    setInput,
    removeInput
  }
}

