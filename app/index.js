import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

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

const lists = ['JavaScript', 'Java', 'Node', 'Python'];

class HelloMessage extends React.Component {
    render() {
        return (
            <ul>
      {lists.map((result, index) => {
        return (<li key={index}>{result}</li>);
      })}
    </ul>);
    }
}

const HelloMessageTest = (props) => (
    <div>Hello {props.name}</div>
);

HelloMessageTest.propTypes = {
    name: PropTypes.string,
}

HelloMessageTest.defaultProps = {
    name: 'Zuck',
}

ReactDOM.render(<MyComponent />, document.getElementById('app'));
ReactDOM.render(<HelloMessage />, document.getElementById('app2'));
ReactDOM.render(<HelloMessageTest name="Mark" />, document.getElementById('app3'));



/*
ReactDOM.render(<App />, document.getElementById('app'));

Functional Component 可以视为 f(d) => UI，根据传进去的 props 绘出对应的 UI。
注意这边 props 是传入函式的参数，因此取用 props 不用加 this

PropTypes 验证，若传入的 props type 不是 string 将会显示错误
用之前需要npm安装的，mmp
语句$ npm install --save-dev prop-types
还要import PropTypes类

Prop 预设值，若对应 props 没传入值将会使用 default 值 Zuck。用法等于 ES5 的 getDefaultProps 
*/


