import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom/cjs/react-router-dom.min';

import List from './List.js';
import Add from './Add.js';
import Del from './Del.js';
import Update from './Update.js';
import Info from './Info.js';

function Nav () {
  return (
    <>
      <BrowserRouter>
        <Link to="/">列表</Link>
        <Link to="/list/add">添加</Link>
        <Link to="/list/del">删除</Link>
        <Link to="/list/update">修改</Link>
        <Route path="/" exact component={List}></Route>
        <Route path="/list/add" component={Add}></Route>
        <Route path="/list/del" component={Del}></Route>
        <Route path="/list/update" component={Update}></Route>
        <Route path="/list/info/:id" component={Info}></Route>
      </BrowserRouter>
    </>
  )
}

export default Nav;
