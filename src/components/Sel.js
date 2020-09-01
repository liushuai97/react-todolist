import React, { useRef } from 'react';
import {dlist} from './List';

function Sel () {

  const {listData, logData, setListData } = React.useContext(dlist);

  const serarchRef = useRef(null);

  function handleSel () {
    console.log('查询条件：' + serarchRef.current.value);
    if (serarchRef.current.value === '') {
      setListData(logData);
    } else {
      let result = listData.filter(item => item.name === serarchRef.current.value);
      if(result.length > 0)  {
        console.log('查询结果：' + JSON.stringify(result[0]));
        setListData(result);
      } else {
        console.log('查询结果：无匹配项');
        setListData([]);
      };
    }
  }

  return (
    <>
      <input type="text" placeholder="请输入用户名" defaultValue="" id="userName" name="userName" ref={serarchRef}/>
      <button onClick={handleSel}>查询</button>
    </>
  )
}

export default Sel;