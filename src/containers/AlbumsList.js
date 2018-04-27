import React from 'react';
import '../containers-css/albumslist.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';



export const AlbumsList=({albums})=>{

  return (
    <div className="collection album-list">
      {
        albums.map((elem,index)=><Link to={"/album/"+elem.id} key={elem.name+'_'+index} className="collection-item">{elem.title}</Link>)
      }
    </div>
  )
}

const mapState2Props=(state)=>{
  const array=state.albums.map(elem=>{
    return {
      id:elem.id,
      title:elem.title
    }
  });
  return {
    albums:array
  }
}

export default connect(mapState2Props)(AlbumsList);