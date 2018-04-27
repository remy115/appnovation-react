import React from 'react';
import {connect} from 'react-redux';

import {votes} from '../actions/albums';
import {calcAverage} from '../tools/tools';
import '../components-css/ratewidget.css';

class RateWidget extends React.Component {
  constructor(props) {
    super(props)

    this.state={
      hoveredStar:0,
      voting:false
    }

    this.onMouseEnter=this.onMouseEnter.bind(this);
    this.onVote=this.onVote.bind(this);
    this.mouseEnter1=this.mouseEnter1.bind(this);
  }

  onMouseEnter(i) {
    return this.setState(()=>({hoveredStar:i}));
  }


  onVote(stars) {
    this.setState(()=>({voting:'voted'}));
    this.props.vote(stars);
  }

  mouseEnter1() {
    if(this.state.voting==='voted')
      return false;
    this.setState(()=>({voting:true}));

  }

  render() {
    const votedClass=' rate-star-voted';


    const {votes,size}=this.props;

    // console.log('votes',votes);

    /* const totalVotes=votes.length;
    const sum=votes.reduce((accum,current)=>accum+current);
    const average = totalVotes ? (sum/totalVotes).toFixed(2) : 0; */
    const {average,totalVotes}=calcAverage(votes);

    const result=<p className="rating-points">{average}/5 on {totalVotes}</p>;
    
    let stars=[];
    for(let i=1;i<6;i++) {
      const filled = this.state.hoveredStar >= i ? votedClass : '';
      stars.push(<div key={i} className={"rate-star"+filled} onMouseEnter={()=>this.onMouseEnter(i)} onClick={()=>this.onVote(i)}></div>);
    }

    const content=this.state.voting && this.state.voting !== 'voted' ? stars : result;

    const large=size==='large' ? ' large' : '';
    return (
      <div className={"rate-widget"+large} onMouseEnter={this.mouseEnter1} onMouseLeave={()=>this.setState(()=>({voting:false}))}>
        {content}
      </div>
    )
  }
}

const mapState2Props=(state,ownProps)=>{
  const {id,photoId}=ownProps;
  const album=state.albums.find(elem=>elem.id===id);

  return {
    votes:album.photos.find(elem=>elem.id===photoId).votes
  }
}

const mapDispatch2Props=(dispatch,ownProps)=>{
  const {id,photoId}=ownProps;
  return {
    vote:(stars)=>dispatch(votes({id,photoId,stars}))
  }
}

export default connect(mapState2Props,mapDispatch2Props)(RateWidget);