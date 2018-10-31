import React, { Component } from 'react'


class Test extends Component {
  state = {
    title: '',
    body: ''
  }
  componentDidMount() {
    console.log('component did mount...');
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data => this.setState({
        title: data.title,
        body: data.body
      }));
  }
  // componentWillMount() {
  //   console.log('component about to mount...');
  // }

  // componentDidUpdate() {
  //   console.log('component did update...');
  // }

  // this is depracated
  // UNSAFE_componentWillReceiveProps(nextProps, nextState) {
  //   console.log('component will receive props...');
  // }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   return null;
  // }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log('getSnapSHotBeforeUpdate...');
  // }

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <h1>{body}</h1>
      </div>
    )
  }
}

export default Test;
