import React, {useEffect} from "react";
import './App.css';

const PARTNER_ID = 'y4nd3x-p4r1n3r-1d';
const SCRIPT_SRC = `https://ivanklak.github.io/legal-aid-widget/bundle.js?id=${PARTNER_ID}`;

const App = () => {

  useEffect(() => {
    // например, партнер решил загрузить нашу кнопкц сразу после загрузки контента
    requestButton();
  }, [])

  const loadWidget = (src, id, callback) => {
    return new Promise((resolve, reject) => {
      const t = document.createElement('script');
      t.type ='text/javascript';
      t.async = true;
      t.id = id;
      t.onload = () => {
        callback();
        resolve();
      };
      t.onerror = () => {
        reject();
      };
      t.src = src;
      const c = document.getElementsByName('script')[0];
      if ( c ) c.parentNode.insertBefore(t, c);
      else document.documentElement.firstChild.appendChild(t);
    })
  }

  const requestButton = () => {
    loadWidget(
        SCRIPT_SRC,
        'legal-widget-id',
        () => {
          // Проверяем, что глобальный объект LegalAidWidgetApi существует
          if (typeof window.LegalAidWidgetApi !== 'undefined') {
            console.log('глобальный объект LegalAidWidgetApi существует')
            // передаем id партнера (пока что так)
            window.LegalAidWidgetApi.button(PARTNER_ID);
          } else {
            console.error('SDK не загружен или инициализирован неправильно.');
          }
        }
    ).then(() => {
      console.log('onload -> resolve')
    }).catch((e) => {
      console.log('onerror -> reject', e)
    })
  }

  return (
    <div className="App">
      <div className="menu">
        <div className="name">маркет</div>
        <div className="menu-search">поиск</div>
      </div>
      <div className="items-container">
        <div className="item">
          <div className="photo">фото</div>
          <div>текст</div>
        </div>
        <div className="item">
          <div className="photo">фото</div>
          <div>текст</div>
        </div>
        <div className="item">
          <div className="photo">фото</div>
          <div>item 3</div>
        </div>
        <div className="item">
          <div className="photo">фото</div>
          <div>item 4</div>
        </div>
        <div className="item">
          <div className="photo">фото</div>
          <div>item 5</div>
        </div>
        <div className="item">
          <div className="photo">фото</div>
          <div>item 6</div>
        </div>
        <div className="item">
          <div className="photo">фото</div>
          <div>item 7</div>
        </div>
        <div className="item">
          <div className="photo">фото</div>
          <div>item 8</div>
        </div>
        <div className="item">
          <div className="photo">фото</div>
          <div>item 9</div>
        </div>
        <div className="item">
          <div className="photo">фото</div>
          <div>item 10</div>
        </div>
      </div>
    </div>
  );
}

export default App;
