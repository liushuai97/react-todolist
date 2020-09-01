import React, { useEffect, useRef, useState } from 'react';
import Pagination from './Pagination.js';
import data from '../mock/data';

function Tables () {

  function handleClick (id) {
    console.log(id);
    console.log('操作');
  }

  function handleInfo (id) {
    console.log(id);
    console.log('详情');
  }

  const tabRef = useRef(null);

  const [list, setList] = useState([]);

  useEffect (()=> {
    setList(list => (
      data.userList
    ))
  },[]);

  return (
    <>
      <h5>数据列表 - 列表</h5>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>姓名</th>
            <th>年龄</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody ref={tabRef}>
          {
            list.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>
                    <button onClick={handleInfo.bind(this, item.id)}>详情</button>
                    <button onClick={handleClick.bind(this, item.id)}>删除</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
        <tfoot>
          <tr>
            <td><Pagination /></td>
          </tr>
        </tfoot>
      </table>
    </>
  )
}

export default Tables;