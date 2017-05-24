var Counter = React.createClass({
    getInitialState() {
        console.log('getInitialState');
        return {value: 0};
    },
    plus() {
        this.setState({
            value: ++this.state.value
        });
        if(this.state.value === 3){
            ReactDOM.unmountComponentAtNode(document.getElementById('content'))
        }
    },
    minus() {
        this.setState({
            value: --this.state.value
        });
    },
    componentWillMount() {
        console.log('Component WILL MOUNT!')
    },

    componentDidMount() {
        console.log('Component DID MOUNT!')
    },

    componentWillReceiveProps() {
        console.log('Component WILL RECIEVE PROPS!')
    },

    shouldComponentUpdate() {
        console.log('should Component Update!');
        return true;
        // return false;
    },

    componentWillUpdate() {
        console.log('Component WILL UPDATE!');
    },

    componentDidUpdate() {
        console.log('Component DID UPDATE!')
    },

    componentWillUnmount() {
        console.log('Component WILL UNMOUNT!')
    },

    render: function() {
        return (
            <div>
                <button onClick={this.plus}>+</button>
                <span>{this.state.value}</span>
                {console.log('render')}
                <button onClick={this.minus}>-</button>
            </div>
        );
    }
});

ReactDOM.render(
    <div>
        <Counter/>
    </div>,document.getElementById('content')
);