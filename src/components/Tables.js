import React, { useRef, useState, useContext } from 'react';
import { useHistory } from "react-router-dom";
import Del from './Del.js';
// import data from '../mock/data';
import {dlist} from './List';

export const dialogBox = React.createContext({})
// 顶层的组件

export function Tables () {

  const { listData } = useContext(dlist)

  const [dialog, setDialog] = useState('none');
  const [uid, setUid] = useState(0);

  const dialogVal = {
    dialog,
    uid,
    hide: () => setDialog('none'),
  }

  let history = useHistory();

  function handleClick (id) {
    setUid(id)
    setDialog(dialog => {
      if (dialog === 'none') {
        return 'block'
      } else {
        return 'none'
      }
    })
  }

  function handleEdit (id) {
    history.push('/list/update/' + id);
    console.log(id);
  }

  function handleInfo (id) {
    history.push('/list/info/' + id);
  }

  const tabRef = useRef(null);

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
            listData.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>
                    <button onClick={handleInfo.bind(this, item.id)}>详情</button>
                    <button onClick={handleEdit.bind(this, item.id)}>修改</button>
                    <button onClick={handleClick.bind(this, item.id)} disabled={dialog === 'block' ? true : false}>删除</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
        {/* <tfoot>
          <tr>
            <td><Pagination config = {{
              totalPage:21,
            }}/></td>
          </tr>
        </tfoot> */}
      </table>
      <dialogBox.Provider value={dialogVal}>
        {dialog === 'none' ? '' : <Del/>}
      </dialogBox.Provider>
    </>
  )
}

// export default Tables;