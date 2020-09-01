import React from 'react';
import '../assets/page.scss';

class Pagination extends React.Component{
  constructor(props){
    super(props)
    // 设置当前页码，默认为第一页
    this.state = {
        pageCurr:1,
        groupCount:7,
        startPage:1,
    }
  }

  create(){
    const {
        totalPage,
    } = this.props.config;

    const {
        pageCurr,
    } = this.state;

    let pages = [];
    if( totalPage <= 10){
        pages.push(<li onClick = { this.goPrev.bind(this) } className = { this.state.pageCurr === 1? "nomore":"" } key={0}>上一页</li>)
        for(let i = 1;i <= totalPage; i++){
            // 点击页码时调用 go 方法，根据 state 判断是否应用 active 样式
            pages.push(<li onClick = { this.go.bind(this,i) } className = { pageCurr === i ? "active" : "" } key={i}>{i}</li>)
        }
        pages.push(<li onClick = { this.goNext.bind(this) } className = { this.state.pageCurr === totalPage? "nomore":"" } key={totalPage + 1}>下一页</li>)
    } else{ 
        pages.push(<li className = { this.state.pageCurr === 1? "nomore":"" } key={ 0 } onClick = { this.goPrev.bind(this) }>上一页</li>)
        for(let i = this.state.startPage;i <= this.state.groupCount;i ++){
          pages.push(<li className = { this.state.pageCurr === i?"active":""} key={i} onClick = { this.go.bind(this,i) }>{i}</li>)
        }
        // 分页中间的省略号
        pages.push(<li className = { "ellipsis" } key={ -1 }>···</li>)
        // 倒数第一、第二页
        pages.push(<li className = { this.state.pageCurr === totalPage -1 ? "active":""} key={ totalPage - 1 } onClick = { this.go.bind(this,totalPage - 1) }>{ totalPage -1 }</li>)
        pages.push(<li className = { this.state.pageCurr === totalPage ? "active":""} key={ totalPage } onClick = { this.go.bind(this,totalPage) }>{ totalPage }</li>)
        // 下一页
        pages.push(<li className = { this.state.pageCurr === totalPage ? "nomore":"" } key={ totalPage + 1 } onClick = { this.goNext.bind(this) }>下一页</li>)
    }
    return pages;
  }

  // 更新 state
  go(pageCurr){
    this.setState({
        pageCurr
    })
  }

  // 页面向前
  goPrev(){
    let {
        pageCurr,
    } = this.state;

    if(--pageCurr === 0){
        return;
    }

    this.go(pageCurr)
  }
  // 页面向后
  goNext(){
    let {
        pageCurr,
    } = this.state;

    const {
        totalPage,
    } = this.props.config;

    if(++pageCurr > totalPage){
        return;
    }
    this.go(pageCurr)
  }

  render () {
    const Pages = this.create.bind(this)();
    return(
      <div className ="main">
          <ul className ="page">
            { Pages }
          </ul>
      </div>
    );
  }
}

export default Pagination;