


    // Functional Component 可以视为 f(d) => UI，根据传进去的 props 绘出对应的 UI。注意这边 props 是传入函式的参数，因此取用 props 不用加 this
    const HelloMessage = (props) => (
        <div>Hello {props.name}</div>
    );

    // PropTypes 验证，若传入的 props type 不是 string 将会显示错误
    HelloMessage.propTypes = {
        name: React.PropTypes.string,
    }

    // Prop 预设值，若对应 props 没传入值将会使用 default 值 Zuck。用法等于 ES5 的 getDefaultProps
    HelloMessage.defaultProps = {
        name: 'Zuck',
    }

    ReactDOM.render(<HelloMessage name="Mark" />, document.getElementById('app'));
