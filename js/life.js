class Count extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props.initialCount);
        console.log('getInitialState');
        this.state = {
            value:0
        }
    }
    plus(){
        this.setState({value:this.state.value+1});
        if(this.state.value === 3){
            ReactDOM.unmountComponentAtNode(document.getElementById('content'))
        }
    }
    render(){
        return <div>
            <button onClick={this.plus.bind(this)}>INCREASE</button>
            <Content count={this.state.value}></Content>
        </div>
    }
}

Count.defaultProps = {initialCount:0};

class Content extends React.Component{
    componentWillMount() {
        console.log('Component WILL MOUNT!')
    }

    componentDidMount() {
        console.log('Component DID MOUNT!')
    }

    componentWillReceiveProps() {
        console.log('Component WILL RECIEVE PROPS!')
    }

    shouldComponentUpdate() {
        console.log('should Component Update!');
        return true;
        // return false;
    }

    componentWillUpdate() {
        console.log('Component WILL UPDATE!');
    }

    componentDidUpdate() {
        console.log('Component DID UPDATE!')
    }

    componentWillUnmount() {
        console.log('Component WILL UNMOUNT!')
    }

    render(){
        return <div>
            <h4>{this.props.count}</h4>
            {(console.log("render"))}
        </div>
    }
}

ReactDOM.render(
    <div>
        <Count/>
    </div>,document.getElementById('content')
);