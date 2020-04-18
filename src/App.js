import React from 'react';
import './App.css';
import CardList from './components/Game/CardList'
import imageLoader from './components/Game/images'
import DropZoneGrid from './components/Game/DropZoneGrid'
import Coordinates from './components/Game/Coordinates'
import Message from './components/Game/Message'
import StartGame from './components/Start/StartGame'
import NamePage from './components/Start/NamePage'
import Lobby from './components/Start/Lobby'
import Instructions from './components/Start/Instructions'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      images: [],
      position: [],
      players: 0,
      route: 'game',
      gameCode: 0
    }
  }

  users = () => [ 
    {
      id: 1,
      name: 'Kelly'
    },
    {
      id: 2,
      name: 'Alex'
    },
    {
      id: 3,
      name: 'James'
    },
    {
      id: 4,
      name: 'Buren'
    },
    {
      id: 5,
      name: 'Ragga'
    },
  ]

  onRouteChange = (route) => {
    this.setState({route: route})
  }

  componentDidMount() {
    const images = imageLoader()
    this.setState({images: images})
    const position = Coordinates()
    this.setState({position: position})
    this.setState({players: this.users().length})
  }

  render () {
    const { images, position, players, route } = this.state;
    return (
      <div className="App">
        <Instructions />
        { route === 'game'
          ? <div>
              <Message />
              <DropZoneGrid />
              <CardList images={images} position={position} players={players} />
            </div>
          : ( 
              route === 'startgame'
              ? <StartGame onRouteChange={this.onRouteChange} />
              : ( route === 'namepage'
                  ? <NamePage onRouteChange={this.onRouteChange} />
                  : <Lobby onRouteChange={this.onRouteChange} />
                )
            )
        }  
      </div>
    );
  }
}

export default App;
