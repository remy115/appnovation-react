import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../containers-css/album.css'

import {truncateText} from '../tools/tools';
import sortingFnc from '../tools/sorting';
import RateWidget from '../components/RateWidget';
import Sorting from '../components/Sorting';
import PhotoDetails from './PhotoDetails';

/*
function makeTri(w,h,up_down,offset) {
  offset=offset/2;
  var w2=w/2;
  var h2=h/2-offset;
  var h2a=h/2+offset;

  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
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


}
*/


class Album extends Component {
  constructor(props) {
    super(props)
    this.state={
      modalIsOpen:false,
      id:0,
      photoId:null,
      viewmode:'grid'
    }

  }



  render() {
    const {album}=this.props;
    if(!album) {
      // "not found" Component here...
      return <h3>Album not found!</h3>
    }
    const {title,id}=album;
    const photos=this.props.photos;
    let view;

    if(this.state.viewmode==='grid') {

      view=photos.map((elem,index)=>{
        const {image,description,id:photoId}=elem;
        return (
          <div key={'index_'+index} className="album-photo-grid">
            <img src={image} className="photo-thumb" alt="" onClick={()=>this.setState(()=>({id,photoId:photoId,modalIsOpen:true}))} />
            <p className="photo-descr">{truncateText({text:description})}</p>
            <div className="photo-rate"><RateWidget id={id} photoId={photoId} /></div>
          </div>
        )
      });
    } else {
      view=(
        <table className="photos-table">
          <thead>
            <tr><th><p className="sorting">Image<Sorting sorting="image" /></p></th><th><p className="sorting">Description<Sorting sorting="description" /></p></th><th><p className="sorting">Rating<Sorting sorting="rate" /></p></th></tr>
          </thead>
          <tbody>
            {
              photos.map((elem,index)=>{
                const {image,description,id:photoId}=elem;
                return (
                  <tr key={'index_'+index}>
                    <td className="td-image"><img src={image} className="photo-thumb" alt="" onClick={()=>this.setState(()=>({id,photoId,modalIsOpen:true}))} /></td>
                    <td><p className="photo-descr">{truncateText({text:description,length:220})}</p></td>
                    <td className="td-rate"><div className="photo-rate"><RateWidget id={id} photoId={photoId} /></div></td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      );
    }

    return (
      <div className="album">
        <div className="album-title">
          <h4>{title}</h4>
          <div className="view-mode">
            <button className="btn waves-effect waves-light" onClick={()=>this.setState(()=>({viewmode:'grid'}))} disabled={this.state.viewmode==='grid'} type="button">Grid</button>
            <button className="btn waves-effect waves-light" onClick={()=>this.setState(()=>({viewmode:'table'}))} disabled={this.state.viewmode==='table'} type="button">Table</button>
          </div>
        </div>
        <div className="album-photos">
          {view}
        </div>
        <PhotoDetails modalIsOpen={this.state.modalIsOpen} id={this.state.id} photoId={this.state.photoId} onClose={()=>this.setState(()=>({modalIsOpen:false}))} />
      </div>
    )
  }
}

const mapState2Props=(state,ownProps)=>{
  const album=state.albums.find(elem=>elem.id===ownProps.id);
  album.photos=sortingFnc(album.photos,state.filter);
  return {
    album:album,
    photos:album.photos
  }
}

export default connect(mapState2Props)(Album);