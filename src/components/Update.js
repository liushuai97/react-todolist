import React, { useEffect, useState, useRef } from 'react';
import data from '../mock/data';

function Update (props) {

  const [infos, setInfos] = useState({});

  const [userName, setUserName] = useState(infos.name);
  const [age, setAgeName] = useState(infos.age);

  const nameRef = useRef(null);
  const ageRef = useRef(null);

  // 根据路由ID查询对应数据信息
  const url = props.history.location.pathname;
  const userId = url.substring(url.lastIndexOf('/') + 1, url.length + 1);

  function handleEdit () {
    alert('修改成功！数据ID：' + infos.id);
    let userInfo = {
      id: infos.id,
      name: userName === undefined ? infos.name : userName,
      age: age === undefined ? infos.age : parseInt(age),
    }
    console.log(userInfo);
    props.history.push('/');
  }

  function handleChangeName () {
    setUserName(nameRef.current.value)
  }

  function handleChangeAge () {
    setAgeName(ageRef.current.value)
  }

  useEffect(()=>{
    let userInfo = data.userList.filter(item => (item.id === parseInt(userId)))
    setInfos(infos => userInfo[0])
  }, [userId])

  return (
    <>
      <h5>数据列表 - 修改</h5>
      <div>
      {infos.id} - {infos.name} - {infos.age}
      </div>

      <form>
        <label htmlFor="userName">姓名</label>
        <input type="text" id="userName" name="userName" onChange={handleChangeName} defaultValue={infos.name} ref={nameRef}/>
        <label htmlFor="age">年龄</label>
        <input type="text" id="age" name="age" onChange={handleChangeAge} defaultValue={infos.age} ref={ageRef}/>
        <button type="submit" onClick={handleEdit}>修改</button>
      </form>
      
    </>
  )
}

export default Update;