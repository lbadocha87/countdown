import React, {Component} from 'react';
import Countdown from 'react-countdown-now';

import './App.css';

class App extends Component {

	
	renderer = ({ days, hours, minutes, seconds}) => {
		return <span>{days} dni {hours} godzin {minutes} minut {seconds} sekund</span>;
	}
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
					
					<h1>Zostało</h1>
					<h2><Countdown date={'Sun, 14 Aug 2022 11:25:00'} renderer={this.renderer} /></h2>
        </header>
      </div>
    );
  }
  
  
}

export default App;
