import React, { useState, useRef, useEffect } from 'react';

import Terminal from './components/Terminal';

import logo from './logo.svg';
import result from './assets/result.jpeg';
import header from './assets/header.jpeg';
import banner from './assets/banner.png';

import './App.css';

function App() {
  const [cls, setCls] = useState(['center']);
  const sl1 = useRef(null);
  const sl2 = useRef(null);
  const sl3 = useRef(null);
  const sl4 = useRef(null);
  const sl5 = useRef(null);
  const [canShowNext, setShowNext] = useState(false);
  const [blink, setBlink] = useState(['']);
  const [isTerminalVisible, setTerminalVisible] = useState(false);

  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

  useEffect(() => {
    setInterval(() => {
      setBlink(['blink']);
    }, 4900);
    setInterval(() => {
      setBlink(['']);
    }, 5000);
  }, []);

  return (
    <>
      <div className='App'>
        <header className='drac'>
          <img
            src={logo}
            className='App-logo'
            alt='logo'
            onClick={() => {
              setCls((old) => [...old.filter((c) => c !== 'border')]);
            }}
          />
          <div
            className={cls.join(' ')}
            onClick={() => {
              if (cls.find((c) => c === 'border')) {
                scrollToRef(sl1);
              } else {
                setCls((old) => [...old, 'border']);
              }
            }}
          >
            <div className='file'>.PPTX</div>
            <div>case: </div>
            <div>Kero Kolaborar</div>
          </div>
        </header>
      </div>
      <div className='full drac row' ref={sl1}>
        <div className='sl1'>
          <div className='side-device'>
            <div>Kero Kolaborar</div>
            <div>CEFET-MG, IFSP, UFLA</div>

            {canShowNext && (
              <div
                className='prox'
                onClick={() => {
                  scrollToRef(sl2);
                  setCls(['center']);
                }}
              >
                OK, e aí?
              </div>
            )}
          </div>
          <div className='device'>
            <div
              className='screen'
              onClick={() => {
                setShowNext(true);
              }}
            />
          </div>
        </div>
      </div>
      <div className='full drac row' ref={sl2}>
        <div className='sl2 column'>
          <ul className='lista'>
            <li className={blink.join(' ')}>
              Time com pouca experiência em programação
            </li>
            <li className={blink.join(' ')}>
              Nunca haviam desenvolvido mobile
            </li>
            <li className={blink.join(' ')}>Timming</li>
          </ul>
          <div
            className={cls.join(' ')}
            onClick={() => {
              if (cls.find((c) => c === 'border')) {
                scrollToRef(sl3);
                setTimeout(() => {
                  setTerminalVisible(true);
                }, 1000);
              } else {
                setCls((old) => [...old, 'border']);
              }
            }}
          >
            <div className='file comquefaiz'>.sh</div>
            <div>kero-kolaborar.sh</div>
          </div>
        </div>
      </div>
      <div className='full drac row' ref={sl3}>
        {isTerminalVisible && (
          <div className='sl3'>
            <Terminal
              close={() => {
                setTerminalVisible(false);
              }}
              nextPage={() => {
                setTerminalVisible(false);
                setTimeout(() => {
                  scrollToRef(sl4);
                }, 300);
              }}
            />
          </div>
        )}
      </div>
      <div className='full drac row' ref={sl4}>
        <div className='column wide'>
          <img
            src={header}
            className='header'
            onClick={() => {
              scrollToRef(sl5);
            }}
          />
          <div className='sl4'>
            <div>
              <div className='res'>
                <span className='number'>146</span> Downloads
              </div>
              <div className='res'>
                <span className='number'>133</span> Cadastros
              </div>
              <div className='res'>
                <span className='number'>46</span> cards atendidos por{' '}
                <span className='number'>90</span> pessoas
              </div>
              <div className='res'>Várias regiões do país</div>
            </div>
            <img src={result} className='result' />
          </div>
        </div>
      </div>
      <div className='full drac row' ref={sl5}>
        <div className='sl5'>
          <img src={banner} className='banner' />
          <div className='insta'>@sarradaug</div>
          <div className='in'>luizotaviosoares</div>
          <div className='tks'>Thank you!</div>
        </div>
      </div>
    </>
  );
}

export default App;
