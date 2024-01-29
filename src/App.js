import React from "react";
import Utama from './utama'
import {Link} from 'react-router-dom';

class App extends React.Component {
  render() {
    return(
      <div> <hr />
      <Link to="/">Beranda</Link> |
      <Link to="/event">Hari Besar</Link> |
      <Link to="/gallery">Gallery</Link> 
      <p><Utama /></p>
      </div>
    )
  }
}

export default App;