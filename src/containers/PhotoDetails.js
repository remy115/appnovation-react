import React from 'react';
import {connect} from 'react-redux';
import Modal from 'react-modal';
import '../containers-css/photodetails.css';

import RateWidget from '../components/RateWidget';

Modal.setAppElement('#root');

const PhotoDetails=({modalIsOpen=false,id,photoId,image,description,onClose})=>{
  

  const customStyles = {
    content:{
      top:'50%',
      left:'50%',
      right:'auto',
      bottom:'auto',
      marginRight:'-50%',
      transform:'translate(-50%, -50%)',
      zIndex:100
    }
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      style={customStyles}
      contentLabel="Photo Details"
      parentSelector={() => document.body}
      onRequestClose={()=>onClose()}
    >
    <div className="photo-details">
      <button type="button" onClick={onClose} className="close-btn btn-floating btn-small waves-effect waves-light red"><i className="tiny material-icons">close</i></button>
      <h2>Photo Details</h2>
      <img src={image} alt="" className="photo" />
      <p className="description">{description}</p>
      <div className="photo-rate"><RateWidget size="large" id={id} photoId={photoId} /></div>
    </div>
  </Modal>
  )
}

const mapState2Props=(state,ownProps)=>{
  if(!ownProps.id) {
    return {description:'',image:null}
  }
  const album=state.albums.find(elem=>elem.id===ownProps.id);
  const photo=album.photos.find(elem=>elem.id===ownProps.photoId);
  return {
    description:photo.description,
    image:photo.image
  }
}

export default connect(mapState2Props)(PhotoDetails);