class Counter extends React.Component {
  constructor(props){
    super(props);

    this.addOne = this.addOne.bind(this);
    this.minusOne = this.minusOne.bind(this);
    this.resetValue = this.resetValue.bind(this);
    this.state = {
      count: []
    }
  }

    componentDidMount() {
      const stringCount = localStorage.getItem('count');
      const count = parseInt(stringCount, 10)

      if(!isNaN(count)) {
        this.setState(() => ({ count }))
      }
    }

    componentDidUpdate(prevProps, prevState) {
      if (prevState.count !== this.state.count) {
        localStorage.setItem('count', this.state.count);
      }
    }


  addOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };
    });
  }

  minusOne(){
    this.setState((prevState) =>{
      return {
        count: prevState.count - 1
      }
    });
  }

  resetValue(){
    this.setState(() => {
      return {
        count: 0
      }
    });
  }

  render(){
    return(

      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.addOne}>+1</button>
        <button onClick={this.minusOne}>-1</button>
        <button onClick={this.resetValue}>Reset</button>
      </div>
    )
  }
}


ReactDOM.render(<Counter />, document.getElementById("root"));