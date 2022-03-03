// document this function!
export const renderList = (toRender = []) => {
  const ulEl = document.createElement('ul');
  ulEl.className='list-group';

  for (const nextItem of toRender) {
    const liEl = document.createElement('li');
    liEl.innerText = nextItem;
    liEl.className='list-group-item';
    ulEl.appendChild(liEl);
  }

  return ulEl;
};
