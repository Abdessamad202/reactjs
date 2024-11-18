import { Component } from 'react'
export default class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sec: 0,
      min: 0,
      hrs: 0,
      date: undefined,
    }
  }
  componentDidMount() {
    setInterval(() => {
      if (this.state.sec >= 59) {
        this.setState({ sec: 0 });
        if (this.state.min >= 59) {
          this.setState({ min: 0 });
          if (this.state.hrs >= 23) {
            this.setState({ hrs: 0 });
          } else {
            this.setState({ hrs: this.state.hrs + 1 });

          }
        } else {
          this.setState({ min: this.state.min + 1 })
        }
      } else {
        this.setState({ sec: this.state.sec + 1 });

      }
    }, 1000);

  }
  render() {
    return (
      <div className="">
        {this.state.hrs < 10 ? `0${this.state.hrs}` : `${this.state.hrs}`} : {this.state.min < 10 ? `0${this.state.min}` : `${this.state.min}`} : {this.state.sec < 10 ? `0${this.state.sec}` : `${this.state.sec}`}
      </div>
    )
  }
}