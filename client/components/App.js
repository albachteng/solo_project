import React, {Component} from 'react';

/* stateful container component for the entire app*/ 
class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div id="app">
                <h1>Prepare to Fight!</h1>
                <div>
                    <Stats passed={this.props}/>
                </div>
            </div>
            )
    }
}

export default App;