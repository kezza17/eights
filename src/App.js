import React from 'react';
import './App.css';
import CardList from './components/CardList'
import imageLoader from './components/images'
import DropZoneGrid from './components/DropZoneGrid'
import Coordinates from './components/Coordinates'
import Message from './components/Message'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      images: [],
      position: [],
      players: 0
    }
  }

  componentDidMount() {
    const images = imageLoader()
    this.setState({images: images})
    const position = Coordinates()
    this.setState({position: position})
    this.setState({players: 4})
  }

  render () {
    const { images, position, players } = this.state;
    return (
      <div className="App">
        <Message />
        <DropZoneGrid />
        <CardList images={images} position={position} players={players}/>
      </div>
    );
  }
}

export default App;
