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


/* TodoApp 组件中包含了显示 Todo 的 TodoList 组件，Todo 的内容透过 props 传入 TodoList 中。
由于 TodoList 仅单纯 Render UI 不涉及内部 state 操作是 stateless component，
所以使用 Functional Component 写法。需要特别注意的是这边我们用 map function 来迭代 Todos，
需要留意的是每个迭代的元素必须要有 unique key 不然会发生错误（可以用自定义 id，或是使用 map function 的第二个参数 index）*/
const TodoList = (props) => (
    <ul>
 {
 props.items.map((item) => (
 <li key={item.id}>{item.text}</li>
 ))
 }
 </ul>
)

/* 整个 App 的主要组件，这边比较重要的是事件处理的部份，内部有 */
class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            items: [],
            /* items定义的是props对象的一个属性 */
            text: '',
        }
    }
    onChange(e) {
        this.setState({ text: e.target.value });
    }
    handleSubmit(e) {
        e.preventDefault();
        const nextItems = this.state.items.concat([{ text: this.state.text, id: Date.now() }]);
        const nextText = '';
        this.setState({ items: nextItems, text: nextText });
    }
    render() {
        return (
            <div>
         <h3>TODO</h3>
         <TodoList items={this.state.items} />
         <form onSubmit={this.handleSubmit}>
           <input onChange={this.onChange} value={this.state.text} />
           <button>{'Add #' + (this.state.items.length + 1)}</button>
         </form>
       </div>
        );
    }
}

ReactDOM.render(<TodoApp />, document.getElementById('app4'));

/*
class MarkdownEditor extends React.Component {
        constructor(props) {
            super(props);
            this.handleChange = this.handleChange.bind(this);
            this.rawMarkup = this.rawMarkup.bind(this);
            this.state = {
                value: 'Type some *markdown* here!',
            }
        }
        handleChange() {
            this.setState({ value: this.refs.textarea.value });
        }

}
*/