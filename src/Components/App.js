import React, {Component} from 'react';
import Router from './Router';


// index에서 초기에 아래 App이 렌더링되는 것까지 초기 작업으로 진행됨.
// App이 아래 앱 하에 있는 콤포넌트인 라우터까지 실행시키게 된다. 
// 그 전에 App을 클래스로해서 콤포넌트까지 불러와둬야 한다.


class App extends Component {

// class 아래와 렌더 사이에는 상태와 함수가 배치
  render(){
//상수나 함수에서 언급된 데이터를 상수화 하는 작업이 배치
    return (
// return에는 화면상에 보여지는 부분이 나와야 한다. html로 작성. cf) javaScript로 작업하는 건 ~모양으로 불러온다. 
        <>

          <Router />
        </>
    );
  }
}

export default App;
