/*
 * @Author: zhanghao hao7741936@gmail.com
 * @LastEditors: zhanghao hao7741936@gmail.com
 * @LastEditTime: 2024-07-22
 * Copyright (c) 2024 by zhanghao hao7741936@gmail.com, All Rights Reserved. 
 */
import { useRoutes } from 'react-router-dom';
import './App.css';
import routes from './routes';
function App () {
  return (
    <div className="App">
      {useRoutes(routes)}
    </div>
  );
}

export default App;
