import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

/*
    Snapshot testing was not implemented because the main pages consists of popular artists and their
    artwork. Because of this there can be new artists that become popular and end up in the application.
    A snapshot tests would then fail because the content is no longer the same.
 */
});


