import React from 'react';

class Add extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      userName: '',
      age: 0
    }

    this.handleChage = this.handleChage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChage = (event) => {
    // 读取输入的值
    const name = event.target.name;
    const value = event.target.value;
    //   更新状态
    this.setState({
      [name]: value
    })
  }

  handleSubmit = () => {
    alert('添加成功！');
    console.log(this.state)
    this.props.history.push('/');
  }

  render () {
    return (
      <>
        <form>
          <label htmlFor="userName">姓名</label>
          <input type="text" id="userName" name="userName" onChange={this.handleChage} value={this.state.userName}/>
          <label htmlFor="age">年龄</label>
          <input type="text" id="age" name="age" onChange={this.handleChage} value={this.state.age}/>
          <button type="submit" onClick={this.handleSubmit}>提交</button>
        </form>
      </>
    )
  }
}

export default Add;