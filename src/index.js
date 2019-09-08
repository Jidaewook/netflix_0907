import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';

// 초기 실행은 index.js인데, 바로 자연스럽게 App을 렌더링 시키는 것까지 초기에 이어진다.

ReactDOM.render(<App />, document.getElementById('root'));

