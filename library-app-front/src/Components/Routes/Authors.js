import React from 'react';
import Header from '../Layout/Header.js';
import Table from '../Small/Table.js';
const USERS = 'http://localhost:4000/users';

class Authors extends React.Component {
    state = {
      users: [],
      isLoading: false,
    };

  async componentDidMount() {
    this.setState({ isLoading: true });
    try {
      const result = await fetch(USERS);
      this.setState({
        users: await result.json(),
        isLoading: false
      });
    } catch (error) {
      this.setState({
        isLoading: false
      });
    }
  }

    render() {
      return (
        <div>
        <Header search = {true}/>
        <Table data = {this.state.users} isLoading ={this.state.isLoading} buttons ={false} />
        </div>
      );
    }
  }
  
  export default Authors;