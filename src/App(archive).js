import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { legacy_createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';

function Main(props){
  return <div>
          <h1>메인이다!</h1>
          <div>슬라이더~~
            <Product></Product>
          </div>
          
        </div>
}
function Product(props){
  return <div>
          제품 목록~~~~~~~
          <Board></Board>
         </div>
}
function Board(props){
  var num = useSelector((state)=>{return state.num});
  return <div>
      숫자 : {num}<br/>
      게시판 목록~~~~
      {/* App컴포넌트의 title 출력 */}
      </div>
}
function Main2(props){
  return <div>
          <h1>서브 메인이다!</h1>
          <div>슬라이더~~222
            <Product2></Product2>
          </div>         
        </div>
}
function Product2(props){
  var addFunc = useDispatch();
  return <div>
          제품 목록~~~~~~~222
          <button onClick={()=>{addFunc({type : "minus"})}}>감소!</button> <br/>
          <Board2></Board2>
         </div>
}
function Board2(props){
  var addFunc = useDispatch();
  return <div>
      숫자 : <button onClick={()=>{addFunc({type : "add"})}}>증가!</button> <br/>
      게시판 목록~~~~222      
      </div>
}
function reducer(state, action){
  if(state === undefined){
    return {num : 1}
  }
  var newState = {...state};
  if(action.type == "add"){
    newState.num += 1;
  } else if (action.type == "minus"){
    newState.num -= 1;
  }
  return newState;
}
const store = legacy_createStore(reducer);
function App() {
  // var hong = {name : "홍길동", addr : {post : 1234, area : "인천"}, age : 20};
  // var copyHong = _.cloneDeep(hong);
  // var copyHong = JSON.parse(JSON.stringify(hong));
  return (
    <>
      <Provider store={store}>
        <Main></Main>
        <Main2></Main2>
      </Provider>
    </>
  );
}

export default App;