export const createEL = (identifier: string) :Element => {
  return document.createElement(identifier) as Element;
}

export const findEl = (identifier: string) : Element => {
  return document.querySelector(identifier) as Element;
}

export const applyClassList = (el: any | HTMLElement, classList: string) :any | HTMLElement => {
  classList.trim().split(' ').forEach((classItem: string) => {
    el.classList.add( classItem.trim() );
  });
  return el;
}
