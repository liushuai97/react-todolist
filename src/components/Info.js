import React, { useEffect, useState } from 'react';
import data from '../mock/data';

function Info (props) {

  const [infos, setInfos] = useState({});

  // 根据路由ID查询对应数据信息
  const url = props.history.location.pathname;
  const userId = url.substring(url.lastIndexOf('/') + 1, url.length + 1);

  function handleBack () {
    props.history.push('/');
  }

  useEffect(()=>{
    let userInfo = data.userList.filter(item => (item.id === parseInt(userId)))
    setInfos(infos => userInfo[0])
  }, [userId])

  return (
    <>
      <h5>数据列表 - 详情</h5>
      <div>
      {infos.id} - {infos.name} - {infos.age}
      </div>
      <button onClick={handleBack}>返回</button>
    </>
  )
}

export default Info;