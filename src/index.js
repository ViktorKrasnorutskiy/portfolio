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
const contents = {
  about: `
    <div class='text'>
      <a class='text__syntax'>  const                             </a>
      <a class='text__object'>  portfolio                         </a>
      <a class='text__syntax'>  = {                               </a>
      <br/>

      &ensp;
      <a class='text__props'>   name                              </a>
      <a class='text__syntax'>  :                                 </a>
      <a class='text__str'>     'Viktor'                          </a>
      <a class='text__syntax'>  ,                                 </a>
      <br/>

      &ensp;
      <a class='text__props'>   ages                              </a>
      <a class='text__syntax'>  :                                 </a>
      <a class='text__int'>     25                                </a>
      <a class='text__syntax'>  ,                                 </a>
      <br/>

      &ensp;
      <a class='text__props'>   from                              </a>
      <a class='text__syntax'>  :                                 </a>
      <a class='text__str'>     'Yekaterinburg(RU)'               </a>
      <a class='text__syntax'>  ,                                 </a>
      <br/>

      &ensp;
      <a class='text__props'>   stack                             </a>
      <a class='text__syntax'>  : [                               </a>
      <br/>

      &ensp;&ensp;
      <a class='text__str'>     'html'                            </a>
      <a class='text__syntax'>  ,                                 </a>
      <br/>

      &ensp;&ensp;
      <a class='text__str'>     'css'                             </a>
      <a class='text__syntax'>  ,                                 </a>
      <br/>

      &ensp;&ensp;
      <a class='text__str'>     'javascript'                      </a>
      <a class='text__syntax'>  ,                                 </a>
      <br/>

      &ensp;&ensp;
      <a class='text__str'>     'react'                           </a>
      <br/>

      &ensp;
      <a class='text__syntax'>  ] ,                               </a>
      <br/>

      &ensp;
      <a class='text__props'>   mail                              </a>
      <a class='text__syntax'>  :                                 </a>
      <a class='text__link'>    'viktor.krasnorutsky@yandex.ru'   </a>
      <br/>

      <a class='text__syntax'>  };                                </a>
    </div>
  `
}

const elements = [
  {
    tag: 'div',
    className: 'background background__home',
    innerHtml: '',
    onclick: null
  },
  {
    tag: 'div',
    className: 'content content__home',
    innerHtml: contents.about,
    onclick: null
  },
  {
    tag: 'div',
    className: 'example-card',
    innerHtml: '',
    onclick: null
  },
  {
    tag: 'div',
    className: 'example-card',
    innerHtml: '',
    onclick: null
  },
  {
    tag: 'div',
    className: 'example-card',
    innerHtml: '',
    onclick: null
  },
  {
    tag: 'div',
    className: 'button button__up button__clicked',
    innerHtml: '',
    onclick: (e)=>clickHandler(e)
  },
  {
    tag: 'div',
    className: 'button button__down button__clickable',
    innerHtml: '',
    onclick: (e)=>clickHandler(e)
  }
];

const clickHandler = ({target}) => {
  if (target.classList.contains('button__clickable')) {
    Array.from(document.getElementsByClassName('button')).forEach(
      (button) => {
        button.classList.toggle('button__clickable')
        button.classList.toggle('button__clicked')
      }
    )

    const content = document.querySelector('.content')
    const background = document.querySelector('.background')

    content.classList.toggle('content__home');
    content.classList.toggle('content__examples');
    if (content.classList.contains('content__home')) {
      content.innerHTML = contents.about;
      background.classList.toggle('background__home')
      background.classList.toggle('background__examples')
    } else if (content.classList.contains('content__examples')) {
      content.innerHTML = '';
      background.classList.toggle('background__home')
      background.classList.toggle('background__examples')
    }
    Array.from(document.getElementsByClassName('example-card')).forEach(
      (card, i) => {
        switch(i) {
          case 0:
            card.classList.toggle('example-card__left')
            break;
          case 1:
            card.classList.toggle('example-card__mid')
            break;
          case 2:
            card.classList.toggle('example-card__right')
            break;
        }
        card.classList.toggle('example-card__active')
      }
    )
  };
};

const initElements = () => {
  const app = document.getElementById('app');
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
