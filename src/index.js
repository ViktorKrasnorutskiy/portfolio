const CONTENT = {
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
        <a class='text__syntax'>  ,                                 </a>
        <br/>

        &ensp;
        <a class='text__props'>   git                               </a>
        <a class='text__syntax'>  :                                 </a>
        <a class='text__link'>    'github.com/ViktorKrasnorutskiy'  </a>
        <br/>

        <a class='text__syntax'>  };                                </a>
      </div>
    `,
  elements: [
    {
      className: 'background',
      onclick: null
    },
    {
      className: 'container content __mid content__home',
      onclick: null
    },
    {
      className: 'container __mid_y __left example-card example-card__off __hidden',
      onclick: (e)=>clickHandler(e)
    },
    {
      className: 'container __mid example-card example-card__off __hidden',
      onclick: (e)=>clickHandler(e)
    },
    {
      className: 'container __mid_y __right example-card example-card__off __hidden',
      onclick: (e)=>clickHandler(e)
    },
    {
      className: 'container __mid_x __up button button__home __hidden button__closed',
      onclick: (e)=>clickHandler(e)
    },
    {
      className: 'container __mid_x __down button button__examples __clickable',
      onclick: (e)=>clickHandler(e)
    },
    {
      className: 'container __mid_x __up button button__close __hidden button__closed',
      onclick: (e)=>clickHandler(e)
    }
  ]
}

const __initElements = () => {
  const initElement = ({className, onclick}) => {
    const element = document.createElement('div');
    element.className = className;
    element.onclick = onclick;
    return element;
  };
  CONTENT.elements.forEach((element) => {
    app.append(initElement(element));
  });
  document.querySelector('.content__home').innerHTML = CONTENT.about;
};
__initElements();

const dom = {
  app: document.getElementById('app'),
  content: document.querySelector('.content'),
  buttons: {
    all: document.getElementsByClassName('button'),
    toHome: document.querySelector('.button__home'),
    toExamples: document.querySelector('.button__examples'),
    closeExample: document.querySelector('.button__close')
  },
  example_cards: {
    all: document.getElementsByClassName('example-card')
  }
}

const setDom = {
  setClassesInArray: (elems, ...classes) => {
    Array.from(elems).forEach(
      (elem) => {
        classes.forEach((_class) => {
          elem.classList.toggle(_class)
        });
      }
    )
  },
  setClass: (element, ...classes) => {
    classes.forEach((_class) => {
      element.classList.toggle(_class)
    });
  }
}

const clickHandler = ({target}) => {
  const targetHave = (anyClass) => {
    return target.classList.contains(anyClass);
  };
  if (targetHave('__clickable')) {
    if (targetHave('button__examples') || targetHave('button__home')) {
      setDom.setClass(dom.content, 'content__home', 'content__examples');
      setDom.setClass(dom.buttons.toHome, '__hidden', '__clickable', 'button__closed');
      setDom.setClass(dom.buttons.toExamples, '__hidden', '__clickable', 'button__closed');
      setDom.setClassesInArray(dom.example_cards.all, '__hidden', '__clickable');
      setDom.setClassesInArray(dom.example_cards.all, 'example-card__on', 'example-card__off');
    } else if (targetHave('example-card') || targetHave('button__close')) {
      setDom.setClass(dom.content, 'content__examples', 'content__example');
      setDom.setClass(dom.buttons.toHome, '__hidden', '__clickable', 'button__closed');
      setDom.setClass(dom.buttons.closeExample, '__hidden', '__clickable', 'button__closed');
      setDom.setClassesInArray(dom.example_cards.all, '__hidden', '__clickable');
      setDom.setClassesInArray(dom.example_cards.all, 'example-card__on', 'example-card__off');
    }
    if (dom.content.classList.contains('content__home')) {
      dom.content.innerHTML = CONTENT.about;
    } else if (dom.content.classList.contains('content__examples')) {
      dom.content.innerHTML = '';
    } else if (dom.content.classList.contains('content__example')) {
      dom.content.innerHTML = 'example was run';
    }
  }
};
