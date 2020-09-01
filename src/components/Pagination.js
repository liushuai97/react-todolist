import React from 'react';
import style from '../assets/page.sass';

class Pagination extends React.Component{
  constructor (props) {
    // ES6的固定写法 class的继承
    super(props);
    // 组件内部的状态，setState
    this.state = {}
  }
  render () {
    return(
      <div className = { style.main }>
          <ul className = { style.page }>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li className = { style.active }>5</li>
              <li>6</li>
              <li>7</li>
              <li>8</li>
              <li>9</li>
              <li>10</li>
          </ul>
      </div>
    );
  }
}

export default Pagination;