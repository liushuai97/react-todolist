import React from 'react';

function Sel () {
  function handleSel () {
    console.log('查询条件');
  }
  return (
    <>
      <input type="text" />
      <button onClick={handleSel}>查询</button>
    </>
  )
}

export default Sel;