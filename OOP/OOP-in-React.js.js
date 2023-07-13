// 092-OOP in React.js

class Toggle extands React.Component {
    constructor(props) {
        super(props)
        this.state = {isToggleOn: true};

        //this binding is necessary to make 'this' in the callback
        this.hahandleClick =this.hahandleClick.bind(this);
    }

    hahandleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }))
    }

    render(){
        return {
            <button onClick={this.hahandleClick}>
                {this.state.isToggleOn ? "ON" : "OFF"}
            <button/>

        }
    }
}

ReactDOM.render(
    <Toggle />,
    document.getElementById('root')
)