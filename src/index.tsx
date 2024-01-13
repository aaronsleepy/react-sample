import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Hello from './components/basic/Hello';
import UseContextPage from './components/hook/HookUseContextSample';
import Counter2 from './components/hook/HookUseReducerSample';
import ImageUploder from './components/hook/HookUseRefSample';
import Counter from './components/hook/HookUseStateSample';
import Clock from './components/hook/effect/HookUseEffectSample';
import UseCallbackParent from './components/hook/memoization/HookUseCallbackSample';
import UseMemoSample from './components/hook/memoization/HookUseMemoSample';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Hello />
    <Counter initialValue={1} />
    <hr />
    <Counter2 initialValue={1} />
    <hr />
    {/* <MemoParent /> */}
    <UseCallbackParent />
    <hr />
    <UseMemoSample />
    <hr />
    <Clock />
    <hr />
    <UseContextPage />
    <hr />
    <ImageUploder />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
