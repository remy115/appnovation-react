import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import CentralContent from './components/CentralContent';
import AlbumsList from './containers/AlbumsList';
import Album from './containers/Album';

class App extends Component {

  render() {
    const {path,params}=this.props.match;
    // console.log('################3',this.props);
    let content,title=<h4>Available albums:</h4>;
    if(path==='/') {
      content=(<AlbumsList />)
    } else if(params.id) {
      title=false;
      content=(<Album id={params.id} />)
    }

    return (
      <div className="App">
        <Header />
        <CentralContent>
          {title}
          {content}
        </CentralContent>
      </div>
    );
  }
}

export default App;
