import React, { useState } from 'react';

import './terminal.css';

const Terminal = ({ nextPage, close }) => {
  const [history, setHistory] = useState([]);

  const [command, setCommand] = useState('');
  return (
    <div className='terminal'>
      <div className='navbar'>
        <div className='buttons'>
          <div className='red' onClick={close}></div>
          <div className='yellow'></div>
          <div className='green'></div>
        </div>
        <div className='current'>zsh</div>
        <div className='title'>Terminal</div>
      </div>
      <div className='body'>
        {history.map((h) => (
          <>
            <div className='command-container'>
              <div className='user'>
                luizdopc@ioasys (~/KeroKolaborar/src) -{' '}
              </div>
              <div className='command'>{h.command}</div>
            </div>
            <div className='output-container'>
              {h.output.map((o) => (
                <div className='output'>{o}</div>
              ))}
            </div>
          </>
        ))}
        <div className='command-container mb'>
          <div className='user'>luizdopc@ioasys (~/KeroKolaborar/src) - </div>
          <div className='command'>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                let output = [command && 'command not found'];
                if (command !== 'clear') {
                  if (command === 'ls')
                    output = [
                      '.',
                      '..',
                      'assets/',
                      'components/',
                      'config/',
                      'screens/',
                      'store/',
                    ];

                  if (command === 'ldpc arch kk/redux')
                    output = [
                      'store folder structure:',
                      '---- module/',
                      '-------- moduleActions.js',
                      '-------- module.js',
                    ];
                  if (command === 'ldpc open KeroKolaborar') {
                    output = ['switching page...'];
                    setTimeout(() => {
                      nextPage();
                    }, 1000);
                  }

                  setHistory((old) => [...old, { command, output }]);
                } else {
                  setHistory([]);
                }

                setCommand('');
              }}
            >
              <input
                className='input'
                value={command}
                onChange={(e) => {
                  setCommand(e.target.value);
                }}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
