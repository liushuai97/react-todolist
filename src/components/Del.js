import React, { useContext } from 'react';
import '../assets/dialog.scss';
import { dialogBox } from './Tables';

export function Del () {

  const { hide, uid } = useContext(dialogBox);

  function handleDel () {
    alert('确认删除成功，数据ID：' + uid);
    hide()
  }

  return (
    <>
      <div className="dialog">
        <p>是否确认删除？</p>
        <button onClick={hide}>取消</button>
        <button onClick={handleDel}>确认</button>
      </div>
    </>
  )
}

export default Del;