import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Hello from './components/Hello';
import Counter from './components/HookUseStateSample';
import Counter2 from './components/HookUseReducerSample';
import Parent from './components/ContainerSample';
import MemoParent from './components/memoization/MemoSample';
import UseCallbackParent from './components/memoization/HookUseCallbackSample';
import UseMemoSample from './components/memoization/HookUseMemoSample';
import Clock from './components/effect/HookUseEffectSample';
import UseContextPage from './components/HookUseContextSample';
import ImageUploder from './components/HookUseRefSample';

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
