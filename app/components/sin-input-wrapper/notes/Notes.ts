import {Li, Span, Ul} from '../../base/Text';
import {useDiv} from '../../base/Div';

export type NotesType = {
  render : () => HTMLDivElement
};

export const Notes = () :NotesType => {

  const {
    getDiv, setDiv
  } = useDiv();

  const render = () => {
    setDiv('notes-container');
    const s = Span('notes-header');
    getDiv().append(s);

    const ul = Ul('notes-ul');
    const lis = ['SSN is 9 digit number.','When sum all numbers of SSN.', 'Double the every alternate number starting second number.', 'Final sum of all the number when divided by 10 will have a 0 as remainder.']
    lis.forEach((lText: string) => {
      const li = Li(lText)
      ul.append(li);
    });
    getDiv().append(ul);

    return getDiv();
  }

  return {
    render
  }
}
