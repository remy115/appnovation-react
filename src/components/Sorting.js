import React from 'react';
import {connect} from 'react-redux';

import {setSorting} from '../actions/filters';

export class Sorting extends React.Component {
  /* constructor(props) {
    super(props);

    this.elem;
    this.setRef = elem=>this.elem=elem;
    this.setRef=this.setRef.bind(this);
    this.sortingHtml=this.sortingHtml.bind(this);
  } */

  /* componentDidMount() {
    this.sortingHtml(10,20,'up',2);
  } */

  /* sortingHtml(w,h,up_down,offset) {
    offset=offset/2;
    const w2=w/2;
    const h2=h/2-offset;
    const h2a=h/2+offset;
  
    const canvas = this.elem;
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(0,h2);
    ctx.lineTo(w2,0);
    ctx.lineTo(w,h2);
    ctx.lineTo(0,h2);
    ctx.closePath();
    if(up_down==='up') {
      ctx.fillStyle = "black";
      ctx.fill();  
    } else {
      ctx.stroke();
    }
  
  
    ctx.beginPath();
    ctx.moveTo(0,h2a);
    ctx.lineTo(w2,h);
    ctx.lineTo(w,h2a);
    ctx.closePath();
    if(up_down==='down') {
      ctx.fillStyle = "black";
      ctx.fill();  
    } else {
      ctx.stroke();
    }
  
  } */

  render() {
    const props={onClick:()=>this.props.sort((this.props.sortingDirection==='down'?'up':'down'))};
    if(this.props.sortingDirection==='up') {
      // return <canvas className="up"></canvas>
      props.className='up';
    } else if(this.props.sortingDirection==='down') {
      // return <canvas className="down"></canvas>
      props.className='down';
    }
    
    return <canvas  {...props}></canvas>
  }
}

const mapState2Props=(state,ownProps)=>{

  return {
    sortingDirection:state.filter[ownProps.sorting]
  }
}

const mapDispatch2Props=(dispatch,ownProps)=>{
  return {
    sort:(direction)=>{
      const obj={};
      obj[ownProps.sorting]=direction;
      return dispatch(setSorting(obj));
    }
  }

}

export default connect(mapState2Props,mapDispatch2Props)(Sorting);