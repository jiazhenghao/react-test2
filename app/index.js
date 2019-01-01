import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
        <h1>Hello, World!</h1>
      </div>
        );
    }
}

const MyComponent = () => (
 <h1>Hello, World 2019!</h1>
);

/*
ReactDOM.render(<App />, document.getElementById('app'));
*/



ReactDOM.render(<MyComponent/>, document.getElementById('app'));