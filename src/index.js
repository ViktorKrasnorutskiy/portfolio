/* Структура сайта :

/home
  content_home
  btn_down

/examples
  btn_up
  content_examples
    example_card       example_card       example_card
      title              title              title
      btn_open           btn_open           btn_open

/examples/<example>
  background
  btn_close
  content_example
    example
*/

const clickHandler = ({target}) => {
  if (target.classList.contains('button__clickable')) {
    Array.from(document.getElementsByClassName('button')).forEach(
      (button) => {
        button.classList.toggle('button__clickable')
        button.classList.toggle('button__clicked')
      }
    )
  };
};

const initElements = () => {
  const app = document.getElementById('app');
  const elements = [
    {
      tag: 'div',
      className: 'button button__up button__clicked',
      innerHtml: '',
      onclick: (e)=>clickHandler(e)
    },
    {
      tag: 'div',
      className: 'content',
      innerHtml: '',
      onclick: null
    },
    {
      tag: 'div',
      className: 'button button__down button__clickable',
      innerHtml: '',
      onclick: (e)=>clickHandler(e)
    }
  ];
  const initElement = ({tag, className, innerHtml, onclick}) => {
    const element = document.createElement(tag);
    element.className = className;
    element.innerHTML = innerHtml;
    element.onclick = onclick;
    return element;
  };
  elements.forEach((element) => {
    app.append(initElement(element));
  });
};
initElements();
