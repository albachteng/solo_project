import React, {Component} from 'react';

/* a stateless presentation component for displaying randomly generated stats */ 

class Stats extends Component {
  constructor(props) {
      super(props); 
  }
  render() {
      return(
          <div id="stats">
              <h3><strong>STR:</strong></h3>
              <h3><strong>DEX:</strong></h3>
              <h3><strong>CON:</strong></h3>
              <h3><strong>INT:</strong></h3>
              <h3><strong>WIS:</strong></h3>
              <h3><strong>CHA:</strong></h3>
          </div>
      )
  }
}