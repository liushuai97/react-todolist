import React, { createContext, useState } from 'react';
import Sel from './Sel';
import {Tables} from './Tables';
import data from '../mock/data';

// 顶层组件
export const dlist = createContext({});

export function List () {
  const [listData, setListData] = useState(data.userList)
  const [logData] = useState(data.userList)

  const dlistVal = {
    listData,
    logData,
    setListData
  }

  return (
    <dlist.Provider value={dlistVal}>
      <h5>数据列表</h5>
      <Sel />
      <Tables />
    </dlist.Provider>
  )
}